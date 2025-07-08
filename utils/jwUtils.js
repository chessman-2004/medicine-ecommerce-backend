const jwt = require('jwt-simple');

const verifyToken = (token) => {
  try {
    return jwt.decode(token, process.env.JWT_SECRET);
  } catch (err) {
    return null;
  }
};

module.exports = { verifyToken };