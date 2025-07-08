const express = require('express');
const passport = require('passport');
const { googleAuthCallback, getCurrentUser } = require('../controllers/authController');

const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google'), googleAuthCallback);

router.get('/me', getCurrentUser);

module.exports = router;