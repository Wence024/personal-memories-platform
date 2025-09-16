const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY || 'supersecretkey';

/**
 * Express middleware to verify JWT sent in Authorization header.
 * Sets req.user if token is valid.
 * 
 * @param {import('express').Request} req - Request object.
 * @param {import('express').Response} res - Response object.
 * @param {import('express').NextFunction} next - Next middleware callback.
 * @returns {void} Calls next() on success or sends status 401/403 on failure.
 */
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
}

/**
 * Factory that returns middleware verifying user role.
 * Allows route if req.user.role is one of allowedRoles.
 * 
 * @param {...string} allowedRoles - List of strings representing allowed roles.
 * @returns {import('express').RequestHandler} Middleware function verifying role.
 */
function authorizeRoles(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access denied: insufficient permissions' });
    }
    next();
  };
}

module.exports = {
  authenticateToken,
  authorizeRoles
};
