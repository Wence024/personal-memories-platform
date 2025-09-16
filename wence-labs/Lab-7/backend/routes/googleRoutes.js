const express = require('express');
const router = express.Router();
const { passport, generateGoogleJWT } = require('../config/googleOAuth');

/**
 * Initiates Google OAuth login flow.
 * Redirects user to Google for authentication.
 * 
 * @name GET /auth/google
 * @returns {void} Redirects to Google login.
 */
router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] })
);

/**
 * Callback route for Google OAuth.
 * On success, returns JWT token; on failure, redirects to /login.
 * 
 * @name GET /auth/google/callback
 * @param {import('express').Request} req - Request from Google after login.
 * @param {import('express').Response} res - Response object to send token or redirect.
 * @returns {void} Responds with JSON { token } or redirects to login.
 */
router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    const token = generateGoogleJWT(req.user);
    res.json({ token });
  }
);

module.exports = router;
