const express = require('express');
const router = express.Router();
const { authenticateToken, authorizeRoles } = require('../middleware/auth');
const { deleteUser } = require('../controllers/userController');

/**
 * Deletes a user by username. Only accessible to Admin role.
 * Protected by JWT authentication and role check.
 * 
 * @name DELETE /users/:username
 * @param {import('express').Request} req - Request with param username.
 * @param {import('express').Response} res - Response object sending result.
 * @returns {void} Sends success message or 404 if user not found.
 */
router.delete('/users/:username', authenticateToken, authorizeRoles('Admin'), deleteUser);

/**
 * Example protected route to check JWT authentication.
 * Returns greeting with username and role.
 * 
 * @name GET /protected
 * @param {import('express').Request} req - Authenticated request.
 * @param {import('express').Response} res - Response object sending result.
 * @returns {void} Sends JSON message with user info.
 */
router.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: `Hello, ${req.user.username}. You are a ${req.user.role}.` });
});

module.exports = router;
