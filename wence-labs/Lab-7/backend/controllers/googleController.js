const { generateGoogleJWT } = require('../config/googleOAuth');

/**
 * Handles Google OAuth callback by generating a JWT for the authenticated user.
 *
 * @param {import('express').Request} req - Request object populated by Passport after successful Google authentication.
 * @param {import('express').Response} res - Response object used to send back the JWT token.
 * @returns {void} Responds with JSON containing the JWT token.
 */
const handleGoogleCallback = (req, res) => {
  const token = generateGoogleJWT(req.user);
  res.json({ token });
};

module.exports = {
  handleGoogleCallback
};
