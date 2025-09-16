require('dotenv').config();

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { users } = require('../models/userModel');

const SECRET_KEY = 'supersecretkey';

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
    const existingUser = users.find(u => u.googleId === profile.id);

    if (existingUser) {
        return done(null, existingUser);
    }

    // Default role is 'User'
    const newUser = {
        username: profile.displayName,
        googleId: profile.id,
        role: 'User',
    };

    users.push(newUser);
    done(null, newUser);
}));

passport.serializeUser((user, done) => {
    done(null, user.googleId);
});

passport.deserializeUser((id, done) => {
    const user = users.find(u => u.googleId === id);
    done(null, user);
});

function generateGoogleJWT(user) {
    return jwt.sign({
        username: user.username,
        role: user.role,
    }, SECRET_KEY, { expiresIn: '1h' });
}

module.exports = { passport, generateGoogleJWT };
