const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { users } = require('../models/userModel');

const SECRET_KEY = process.env.SECRET_KEY || 'supersecretkey';

/**
 * Registers a new user given username, password, and role.
 * Validates input, hashes password, avoids duplicate username.
 * 
 * @param {import('express').Request} req - Request with body { username, password, role }.
 * @param {import('express').Response} res - Response object to send JSON result.
 * @returns {void} Returns status 201 on success, or 400/401 on error.
 */
const register = async (req, res) => {
  const { username, password, role } = req.body;

  if (!username || !password || !role) {
    return res.status(400).json({ message: 'Username, password, and role are required' });
  }

  const existingUser = users.find(u => u.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword, role });

  res.status(201).json({ message: 'User registered successfully' });
};

/**
 * Authenticates user with username and password.
 * If valid, returns a JWT token containing username and role.
 * 
 * @param {import('express').Request} req - Request with body { username, password }.
 * @param {import('express').Response} res - Response object to send JSON result.
 * @returns {void} Returns { token } JSON or error status/message.
 */
const login = async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  const token = jwt.sign(
    { username: user.username, role: user.role },
    SECRET_KEY,
    { expiresIn: '1h' }
  );

  res.json({ token });
};

module.exports = {
  register,
  login
};
