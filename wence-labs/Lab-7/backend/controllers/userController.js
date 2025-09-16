const { users } = require('../models/userModel');

/**
 * Deletes a user specified by username param.
 * Only proceeds if user exists.
 * 
 * @param {import('express').Request} req - Request with params { username }.
 * @param {import('express').Response} res - Response object to send JSON result.
 * @returns {void} Returns success message or 404 if user not found.
 */
const deleteUser = (req, res) => {
  const { username } = req.params;

  const userIndex = users.findIndex(u => u.username === username);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users.splice(userIndex, 1);
  res.json({ message: 'User deleted successfully' });
};

module.exports = {
  deleteUser
};
