/**
 * @file Contains the global error handling middleware.
 * @module middleware/errorHandler
 */

/**
 * Catches and handles all errors that occur in the application.
 * It must be the last piece of middleware added to the app.
 *
 * @param {Error} err - The error object.
 * @param {object} req - The Express request object.
 * @param {object} res - The Express response object.
 * @param {Function} next - The next middleware function (unused in this case but required by Express).
 */
const globalErrorHandler = (err, req, res, next) => {
  // Log the error stack for debugging purposes
  console.error(err.stack);
  // Send a generic error message to the client
  res.status(500).send('Something broke! Please try again later.');
};

module.exports = globalErrorHandler;