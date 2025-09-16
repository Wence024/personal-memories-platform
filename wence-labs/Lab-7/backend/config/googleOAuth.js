require('dotenv').config();

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { users } = require('../models/userModel');

const SECRET_KEY = process.env.SECRET_KEY || 'supersecretkey';

/**
 * Configures Passport.js with Google OAuth 2.0 strategy.
 * Finds existing user by googleId or creates a new default User role account.
 * 
 * @param {string} accessToken - Token from Google to access APIs (not used).
 * @param {string} refreshToken - Token to refresh Google access (not used).
 * @param {Object} profile - User profile returned by Google.
 * @param {Function} done - Passport callback to signify completion.
 * @returns {void} Invokes done(err, user) when done.
 */
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  const existingUser = users.find(u => u.googleId === profile.id);

  if (existingUser) {
    return done(null, existingUser);
  }

  const newUser = {
    username: profile.displayName,
    googleId: profile.id,
    role: 'User'
  };

  users.push(newUser);
  done(null, newUser);
}));

/**
 * Serializes user for session persistence.
 * 
 * @param {Object} user - The user object to serialize.
 * @param {Function} done - Passport callback.
 * @returns {void}
 */
passport.serializeUser((user, done) => {
  done(null, user.googleId);
});

/**
 * Deserializes user from session store.
 * 
 * @param {string} id - The googleId of the user.
 * @param {Function} done - Passport callback.
 * @returns {void}
 */
passport.deserializeUser((id, done) => {
  const user = users.find(u => u.googleId === id);
  done(null, user);
});

/**
 * Generates JWT token for a user.
 * 
 * @param {Object} user - Authenticated user object.
 * @returns {string} A signed JWT containing username and role, valid for 1h.
 */
function generateGoogleJWT(user) {
  return jwt.sign(
    { username: user.username, role: user.role },
    SECRET_KEY,
    { expiresIn: '1h' }
  );
}

module.exports = { passport, generateGoogleJWT };
