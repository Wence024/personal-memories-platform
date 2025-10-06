/**
 * @file Contains the authentication middleware.
 * @module middleware/auth
 */

/**
 * Checks for a simulated authentication token in the request headers.
 * If the token is valid, it grants access. Otherwise, it sends a 401 Unauthorized response.
 *
 * @param {object} req - The Express request object.
 * @param {object} res - The Express response object.
 * @param {Function} next - The next middleware function.
 */
const authenticationCheck = (req, res, next) => {
  const authToken = req.headers['authorization'];
  if (authToken === 'mysecrettoken') {
    return next(); // Token is valid, proceed to the next middleware/route
  }
  return res.status(401).send('Unauthorized: Access token is missing or invalid.');
};

module.exports = authenticationCheck;