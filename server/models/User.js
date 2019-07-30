const mongoose = require('mongoose');

export const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
});

export default mongoose.model('User', UserSchema);
