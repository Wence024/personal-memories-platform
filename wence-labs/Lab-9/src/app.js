/**
 * @file Configures the Express application and wires up middleware and routes.
 * @module app
 */

const express = require('express');
const requestLogger = require('./middleware/logger');
const globalErrorHandler = require('./middleware/errorHandler');
const mainRoutes = require('./routes/index');

const app = express();

// 1. Apply the request logger middleware to all routes
app.use(requestLogger);

// 2. Register the application routes
app.use('/', mainRoutes);

// 3. Apply the global error handler middleware. This must be the last one.
app.use(globalErrorHandler);

module.exports = app;