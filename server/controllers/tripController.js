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
    console.log('result', result);
    res.locals.trips = result.map(item => item.toObject());
    return next();
  });
};

const add = (req, res, next) => {
  Trips.create(req.body, (err, result) => {
    if (err) {
      return next(err);
    }
    console.log('req.body and result', req.body, result, err);
    // res.locals.addedTrip = result.toObject();
    return next();
  });
};

const getData = (departDate, possOrders) => {
  const data = [];
  for (let i = 0; possOrders.length; i += 1) {
    const locationOrder = [
      { location: req.body.origin, numDays: 0 },
      ...possOrders[i],
      { location: req.body.origin, numDays: 0 }
    ];
    const promiseArr = [];
    for (let i = 0; i < locationOrder.length - 1; i++) {
      const startLoc = locationOrder[i].location;
      const endLoc = locationOrder[i + 1].location;
      promiseArr.push(
        axios.get(
          `https://api.skypicker.com/flights?` +
            `fly_from=${startLoc}` +
            `&fly_to=${endLoc}` +
            `&date_from=${curDepartDate}` +
            `&date_to=${curDepartDate}` +
            `&currency=USD&` +
            `flight_type=oneway` +
            `&adults=${req.body.numAdults}` +
            `&limit=1` +
            `&direct_flights=${req.body.directFlights}` +
            `&selected_cabins=${flightCabins[req.body.flightClass]}` +
            `&partner=picky`
        )
      );

      const temp = curDepartDate.split('/');
      curDepartDate = dateFns.format(
        dateFns.addDays(
          new Date(`${temp[1]}/${temp[0]}/${temp[2]}`),
          locOrderWithOriginAdded[i + 1].numDays
        ),
        'DD/MM/YYYY'
      );
    }
    data.push(promiseArr);
  }
};

const search = async (req, res, next) => {
  const tripChoices = [];
  const possibleOrders = permutations(req.body.destinations); //! find all possible orders of destinations
  console.log(possibleOrders);
  let curDepartDate = dateFns.format(
    new Date(req.body.departureDate),
    'DD/MM/YYYY'
  ); //!initialize at first date

  for (let i = 0; i < possibleOrders.length; i++) {
    const locationOrder = possibleOrders[i];
    //! loop through every order of destinations
    const currentTrip = {};
    currentTrip.userId = req.body.userId;
    currentTrip.origin = req.body.origin;
    currentTrip.roundTrip = req.body.roundTrip;
    currentTrip.numAdults = req.body.numAdults;
    currentTrip.flightClass = req.body.flightClass;
    currentTrip.directFlights = req.body.directFlights;
    currentTrip.destinations = locationOrder;
    currentTrip.flights = [];
    currentTrip.price = 0;
    const locOrderWithOriginAdded = [
      { location: req.body.origin, numDays: 0 },
      ...locationOrder,
      { location: req.body.origin, numDays: 0 }
    ];
    const promiseArr = [];
    for (let i = 0; i < locOrderWithOriginAdded.length - 1; i++) {
      const startLoc = locOrderWithOriginAdded[i].location;
      const endLoc = locOrderWithOriginAdded[i + 1].location;
      promiseArr.push(
        axios.get(
          `https://api.skypicker.com/flights?` +
            `fly_from=${startLoc}` +
            `&fly_to=${endLoc}` +
            `&date_from=${curDepartDate}` +
            `&date_to=${curDepartDate}` +
            `&currency=USD&` +
            `flight_type=oneway` +
            `&adults=${req.body.numAdults}` +
            `&limit=1` +
            `&direct_flights=${req.body.directFlights}` +
            `&selected_cabins=${flightCabins[req.body.flightClass]}` +
            `&partner=picky`
        )
      );

      const temp = curDepartDate.split('/');
      curDepartDate = dateFns.format(
        dateFns.addDays(
          new Date(`${temp[1]}/${temp[0]}/${temp[2]}`),
          locOrderWithOriginAdded[i + 1].numDays
        ),
        'DD/MM/YYYY'
      );
    }
    let getResults;
    try {
      getResults = await Promise.all(promiseArr);
    } catch (err) {
      return next(err);
    }
    getResults.forEach(getResult => {
      const currentFlight = {};
      const rawFlightData = getResult.data.data[0];
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
    });

    tripChoices.push(currentTrip);
  }
  console.log('all trip choices', tripChoices);
  // https://api.skypicker.com/flights?fly_from=LAX&fly_to=BCN&date_from=08/08/2019&date_to=08/08/2019&return_from=09/08/2019&return_to=09/08/2019&currency=USD&flight_type=round&adults=1&limit=5&partner=picky
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

module.exports = { findAll, add, search };
