const express = require('express');
const userRoutes = require('./routes/user.routes');
const loggingMiddleware = require('./middleware/logging.middleware');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(loggingMiddleware);
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`User Service listening on port ${PORT}`);
});