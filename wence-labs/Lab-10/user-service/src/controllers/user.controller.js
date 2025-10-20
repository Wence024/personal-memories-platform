const userService = require('../services/user.service');

const getUsers = (req, res) => {
    const users = userService.getAllUsers();
    res.json(users);
};

module.exports = {
    getUsers,
};