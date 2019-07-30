const mongoose = require('mongoose');

export const TripSchema = new mongoose.Schema({
  destinations: [
    {
      location: { type: String, required: true },
      numDays: { type: Number, required: true }
    }
  ],
  departureTime: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  numAdults: { type: Number, required: true },
  flightClass: { type: String, required: true },
  flights: [
    {
      fromAirport: { type: String, required: true },
      toAirport: { type: String, required: true },
      departureTime: { type: Number, required: true },
      arrivalTime: { type: Number, required: true },
      price: { type: Number, required: true },
      deep_link: { type: Number, required: true },
      routes: [
        {
          fromAirport: { type: String, required: true },
          toAirport: { type: String, required: true },
          departureTime: { type: Number, required: true },
          arrivalTime: { type: Number, required: true },
          airline: { type: String, required: true },
          flightNumber: { type: Number, required: true }
        }
      ]
    }
  ]
});

export default mongoose.model('Trip', TripSchema);
