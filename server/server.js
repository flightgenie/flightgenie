const express = require('express');
const path = require('path');
const app = express();
const tripController = require('./controllers/tripController');
const userController = require('./controllers/userController');
var bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get('/test', (req, res) => {
//   console.log('hi');
//   res.status(200).send('yeet');
// });

app.post('/search', tripController.getTripPrices, tripController.prepTripDataForClient, (req, res) => {
    res.status(200).json(res.locals.tripChoices);
}); // for submitForm
app.get('/trips/:userId', tripController.findAll, (req, res) => {
    res.status(200).json(res.locals.trips);
}); //for getTrips
app.post('/trips', tripController.add, (req, res) => {
    res.status(200).send('yay! added a trip');
}); // for addTrip

app.post('/signup', userController.signUp, (req, res) => {
    res.status(200).send('user added!');
}); // for signup
app.post('/login', userController.login, (req, res) => {
  res.status(200).send(res.locals.user_id)
}); // for login

// statically serve everything in the build folder on the route '/build'
app.use('/', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});
// set up SECRET route
app.get('/secret', (req, res) => {
    res.render('secret');
})

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
