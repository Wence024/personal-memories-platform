const jwt = require('jsonwebtoken');
const SECRET_KEY = 'supersecretkey';

/**
 * Authenticates the user by verifying the JWT token.
 * 
 * @param req - Express request object with authorization header
 * @param res - Express response object
 * @param next - Next middleware function
 * @returns Calls next() on success or sends error response
 */
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token provided' });

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
        req.user = user;
        next();
    });
}

/**
 * Middleware factory to check user roles against allowed roles.
 * 
 * @param allowedRoles - Roles permitted to access the route
 * @returns Middleware function that checks role permissions
 */
function authorizeRoles(...allowedRoles) {
    /**
     * Middleware to check user role against allowed roles.
     * 
     * @param req - Express request object with user data
     * @param res - Express response object
     * @param next - Next middleware function
     * @returns Calls next() or sends error response
     */
    return (req, res, next) => {
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Access denied: insufficient permissions' });
        }
        next();
    };
}

module.exports = {
    authenticateToken,
    authorizeRoles,
};
