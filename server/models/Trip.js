const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://thegrandsamh:DaraSam45@developmentcluster-vjch4.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);

const TripSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId },
  origin: { type: String, required: true },
  roundTrip: { type: Boolean, required: true },
  numAdults: { type: Number, required: true },
  flightClass: { type: String, required: true },
  directFlights: { type: Boolean, required: true },
  totalPrice: { type: Number, required: true },
  destinations: [
    {
      location: { type: String, required: true },
      numDays: { type: Number, required: true }
    }
  ],
  flights: [
    {
      fromAirport: { type: String, required: true },
      toAirport: { type: String, required: true },
      departureTime: { type: Number, required: true },
      arrivalTime: { type: Number, required: true },
      price: { type: Number, required: true },
      deepLink: { type: String, required: true },
      routes: [
        {
          fromAirport: { type: String, required: true },
          toAirport: { type: String, required: true },
          departureTime: { type: Number, required: true },
          arrivalTime: { type: Number, required: true },
          airline: { type: String, required: true },
          flightNumber: { type: Number, required: true },
          latLngFrom: [{ type: Number, required: true }],
          latLngTo: [{ type: Number, required: true }]
        }
      ]
    }
  ]
});

module.exports = mongoose.model('Trip', TripSchema);
