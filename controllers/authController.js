const jwt = require('jwt-simple');
const User = require('../models/User');

exports.googleAuthCallback = async (req, res) => {
  const token = jwt.encode({ id: req.user._id }, process.env.JWT_SECRET);
  res.redirect(`http://localhost:3000?token=${token}`);
};

exports.getCurrentUser = async (req, res) => {
  if (!req.user) return res.status(401).send('Not authenticated');
  res.send({ user: req.user });
};