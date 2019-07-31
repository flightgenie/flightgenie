const Users = require('../models/User');

const signUp = (req, res, next) => {
  Users.create(req.body, (err, result) => {
    if (err) {
      return next(err);
    }
    console.log('user added', req.body, result, err);
    // res.locals.addedTrip = result.toObject();
    return next();
  });
};

const nukeUsers = () => {
  Users.deleteMany({}, err => {
    console.log('deleted users collection');
  });
};

// nukeUsers();

module.exports = { signUp };
