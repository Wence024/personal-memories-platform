const express = require('express');
const router = express.Router();
const { passport, generateGoogleJWT } = require('../config/googleOAuth');

// Start OAuth login
router.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] })
);

// Handle OAuth callback
router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        const token = generateGoogleJWT(req.user);
        res.json({ token });
    }
);

module.exports = router;
