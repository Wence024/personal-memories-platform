const { users } = require('../models/userModel');

/**
 * Deletes a user from the system.
 * 
 * @param {Object} req - Express request object containing username in params
 * @param {Object} res - Express response object
 * @returns {void} Sends JSON response with success or error status
 */
const deleteUser = (req, res) => {
    const { username } = req.params;
    
    const userIndex = users.findIndex(user => user.username === username);
    if (userIndex === -1) return res.status(404).json({ message: 'User not found' });
    
    users.splice(userIndex, 1);
    res.json({ message: 'User deleted successfully' });
};

module.exports = {
    deleteUser
};
