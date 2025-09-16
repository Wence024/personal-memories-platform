const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { users } = require('../models/userModel');

const SECRET_KEY = 'supersecretkey';

/**
 * Registers a new user with the provided username, password, and role.
 * 
 * @param {Object} req - Express request object containing user data in body
 * @param {Object} res - Express response object
 * @returns {void} Sends JSON response with status 201 on success or 400/401 on error
 */
const register = async (req, res) => {
    const { username, password, role } = req.body;

    if (!username || !password || !role) {
        return res.status(400).json({ message: 'Username, password, and role are required' });
    }

    const existingUser = users.find(user => user.username === username);
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword, role });

    res.status(201).json({ message: 'User registered successfully' });
};

/**
 * Authenticates a user with the provided credentials.
 * 
 * @param {Object} req - Express request object containing username and password in body
 * @param {Object} res - Express response object
 * @returns {void} Sends JSON response with authentication token or error message
 */
const login = async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username);
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ message: 'Invalid password' });

    const token = jwt.sign(
        { username: user.username, role: user.role },
        SECRET_KEY,
        { expiresIn: '1h' }
    );

    res.json({ token });
};

module.exports = {
    register,
    login,
};
