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
const login = (req, res, next) => {

  Users.find(req.body, (err, result) => {
    if (err) return next(err);
    res.locals.user_id = result[0]._id;
    return next()
  })
}
const nukeUsers = () => {
  Users.deleteMany({}, err => {
    console.log('deleted users collection');
  });
};

// nukeUsers();

module.exports = { signUp, login };
