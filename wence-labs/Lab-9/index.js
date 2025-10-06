const express = require('express');
const app = express();
const port = 3000;

/**
 * Logs the method and URL of every incoming request to the console.
 * This middleware is applied to all incoming requests.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const requestLogger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

/**
 * Checks for a simulated authentication token in the request headers.
 * If the token is valid, it grants access to the next middleware or route handler.
 * If the token is invalid or missing, it sends a 401 Unauthorized response.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const authenticationCheck = (req, res, next) => {
  const authToken = req.headers['authorization'];
  if (authToken === 'mysecrettoken') {
    next();
  } else {
    res.status(401).send('Unauthorized: Access token is missing or invalid.');
  }
};

app.use(requestLogger);

app.get('/home', (req, res) => {
  res.send('Welcome to the public home page!');
});

app.get('/profile', authenticationCheck, (req, res) => {
  res.send('Welcome to your private profile!');
});

app.get('/error', (req, res, next) => {
  const err = new Error('This is a simulated error.');
  next(err);
});

/**
 * Catches and handles all errors that occur in the application.
 * This middleware must have four arguments: err, req, res, and next.
 * It should be placed at the end of the middleware stack.
 * @param {object} err - The error object.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const globalErrorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log the error stack for debugging
  res.status(500).send('Something broke! Please try again later.');
};

app.use(globalErrorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});