const express = require('express');
const router = express.Router();

const { authenticateToken, authorizeRoles } = require('../middleware/auth');
const { deleteUser } = require('../controllers/userController');

// Protected route (Admin-only)
router.delete('/users/:username', authenticateToken, authorizeRoles('Admin'), deleteUser);

router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: `Hello, ${req.user.username}. You are a ${req.user.role}.` });
});

module.exports = router;
