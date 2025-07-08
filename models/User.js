const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: String,
  name: String,
  email: { type: String, unique: true },
  role: { type: String, default: 'user' }
});

module.exports = mongoose.model('User', userSchema);