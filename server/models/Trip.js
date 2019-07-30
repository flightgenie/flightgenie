const mongoose = require('mongoose');

export const TripSchema = new mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  depart: { type: String, required: true },
  arrive: 
});

export default mongoose.model('Trip', TripSchema);
