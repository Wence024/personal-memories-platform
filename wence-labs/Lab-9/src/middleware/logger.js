/**
 * @file Contains the request logging middleware.
 * @module middleware/logger
 */

/**
 * Logs the method and URL of every incoming request to the console.
 *
 * @param {object} req - The Express request object.
 * @param {object} res - The Express response object.
 * @param {Function} next - The next middleware function.
 */
const requestLogger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware
};

module.exports = requestLogger;