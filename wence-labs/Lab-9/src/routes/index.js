/**
 * @file Defines the main routes for the application.
 * @module routes/index
 */

const express = require('express');
const authenticationCheck = require('../middleware/auth');
const router = express.Router();

// Public route - accessible to everyone
router.get('/home', (req, res) => {
  res.send('Welcome to the public home page!');
});

// Protected route - uses the authenticationCheck middleware
router.get('/profile', authenticationCheck, (req, res) => {
  res.send('Welcome to your private profile!');
});

// Route designed to trigger an error
router.get('/error', (req, res, next) => {
  const err = new Error('This is a simulated error.');
  next(err); // Pass the error to the global error handler
});

module.exports = router;