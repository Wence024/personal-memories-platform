const loggingMiddleware = (req, res, next) => {
    console.log(`[User Service] ${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
    next();
};

module.exports = loggingMiddleware;