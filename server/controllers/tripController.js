const Trips = require('../models/Trip');
const axios = require('axios');
const dateFns = require('date-fns');

const flightCabins = {
  economy: 'M',
  economyPremium: 'W',
  business: 'C',
  'first-class': 'F'
};

const findAll = (req, res, next) => {
  Trips.find({}, (err, result) => {
    console.log('find all trips result', result);
    res.locals.trips = result.map(item => item.toObject());
    return next();
  });
};

const add = (req, res, next) => {
  Trips.create(req.body, (err, result) => {
    if (err) {
      return next(err);
    }
    console.log('add trip req body and result', req.body, result, err);
    // res.locals.addedTrip = result.toObject();
    return next();
  });
};

const getTripPrices = (req, res, next) => {
  // origin, departDate, res.locals.possibleOrders

  res.locals.possibleOrders = permutations(req.body.destinations);
  // console.log('possible orders', res.locals.possibleOrders);
  res.locals.tripPricePromises = [];
  for (let i = 0; i < res.locals.possibleOrders.length; i += 1) {
    let curDepartDate = dateFns.format(
      new Date(req.body.departureDate),
      'DD/MM/YYYY'
    ); //!initialize at first date
    const locationOrder = [
      { location: req.body.origin, numDays: 0 },
      ...res.locals.possibleOrders[i],
      { location: req.body.origin, numDays: 0 }
    ];
    const promiseArr = [];
    for (let i = 0; i < locationOrder.length - 1; i++) {
      const startLoc = locationOrder[i].location;
      const endLoc = locationOrder[i + 1].location;
      const query =
        `https://api.skypicker.com/flights?` +
        `fly_from=${startLoc}` +
        `&fly_to=${endLoc}` +
        `&date_from=${curDepartDate}` +
        `&date_to=${curDepartDate}` +
        `&curr=USD&` +
        `flight_type=oneway` +
        `&adults=${req.body.numAdults}` +
        `&limit=1` +
        `&direct_flights=${req.body.directFlights}` +
        `&selected_cabins=${flightCabins[req.body.flightClass]}` +
        `&partner=picky`;
      // console.log(query);
      promiseArr.push(axios.get(query));
      const temp = curDepartDate.split('/');
      curDepartDate = dateFns.format(
        dateFns.addDays(
          new Date(`${temp[1]}/${temp[0]}/${temp[2]}`),
          locationOrder[i + 1].numDays
        ),
        'DD/MM/YYYY'
      );
    }
    res.locals.tripPricePromises.push(promiseArr);
  }
  next();
};

const prepTripDataForClient = async (req, res, next) => {
  const tripChoices = [];
  let getAllResults;
  try {
    getAllResults = await Promise.all(
      res.locals.tripPricePromises.map(Promise.all.bind(Promise))
    );
  } catch (err) {
    return next(err);
  }

  for (let i = 0; i < res.locals.possibleOrders.length; i++) {
    //! loop through every order of destinations
    const currentTrip = {};
    currentTrip.userId = req.body.userId;
    currentTrip.origin = req.body.origin;
    currentTrip.roundTrip = req.body.roundTrip;
    currentTrip.numAdults = req.body.numAdults;
    currentTrip.flightClass = req.body.flightClass;
    currentTrip.directFlights = req.body.directFlights;
    currentTrip.destinations = res.locals.possibleOrders[i];
    currentTrip.flights = [];
    currentTrip.price = 0;
    const getResults = getAllResults[i];
    for (let i = 0; i < getResults.length; i += 1) {
      const getResult = getResults[i];
      let currentFlight = {};
      const rawFlightData = getResult.data.data[0];
      if (getResult.data.data.length === 0) {
        console.log('no flights found for this result');
        currentFlight = {};
        continue;
      }
      currentTrip.price += rawFlightData.price;

      currentFlight.fromAirport = rawFlightData.flyFrom;
      currentFlight.toAirport = rawFlightData.flyTo;
      currentFlight.departureTime = rawFlightData.dTimeUTC;
      currentFlight.price = rawFlightData.price;
      currentFlight.deepLink = rawFlightData.deep_link;
      currentFlight.route = [];
      rawFlightData.route.forEach((r, i) => {
        if (i === rawFlightData.route.length - 1) {
          currentFlight.arrivalTime = r.aTimeUTC;
        }
        currentFlight.route.push({
          fromAirport: r.flyFrom,
          toAirport: r.flyTo,
          departureTime: r.dTimeUTC,
          arrivalTime: r.aTimeUTC,
          airline: r.airline,
          flightNumber: r.flight_no
        });
      });
      currentTrip.flights.push(currentFlight);
    }

    tripChoices.push(currentTrip);
  }
  // https://api.skypicker.com/flights?fly_from=LAX&fly_to=BCN&date_from=08/08/2019&date_to=08/08/2019&return_from=09/08/2019&return_to=09/08/2019&curr=USD&flight_type=round&adults=1&limit=5&partner=picky
  // do api calls and search calculations here!
  //! make sure to get the arrival time for a trip back from the LAST
  //! ROUTE OF THE LAST FLIGHT!!
  res.locals.tripChoices = tripChoices;
  return next();
};

const nukeTrips = () => {
  Trips.deleteMany({}, err => {
    console.log('deleted trips collection');
  });
};

// nukeTrips();

const permutations = arr => {
  const perms = [];
  const recurse = (shrinkArray, growArray) => {
    if (growArray.length === arr.length) {
      perms.push(growArray);
    } else {
      shrinkArray.forEach((el, i) => {
        const growArrayCopy = [...growArray];
        growArrayCopy.push(el);
        const shrinkArrayCopy = [...shrinkArray];
        shrinkArrayCopy.splice(i, 1);
        recurse(shrinkArrayCopy, growArrayCopy);
      });
    }
  };
  recurse([...arr], []);
  return perms;
};

module.exports = { findAll, add, getTripPrices, prepTripDataForClient };
