const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const { passport } = require('./config/googleOAuth');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const googleRoutes = require('./routes/googleRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(session({
  secret: process.env.SECRET_KEY || 'supersecretkey',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

/**
 * Middleware that logs each incoming HTTP request method and URL.
 * 
 * @param {import('express').Request} req - Request object.
 * @param {import('express').Response} res - Response object.
 * @param {import('express').NextFunction} next - Next middleware in chain.
 * @returns {void} Calls next() after logging.
 */
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

// Mount the routes
app.use('/', authRoutes);
app.use('/', userRoutes);
app.use('/', googleRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
