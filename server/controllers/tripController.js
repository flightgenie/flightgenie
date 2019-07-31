const Trips = require('../models/Trip');

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

const search = (req, res, next) => {
  const tripChoices = [];
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

module.exports = { findAll, add, search };
