const express = require('express');
const orderRoutes = require('./routes/order.routes');
const loggingMiddleware = require('./middleware/logging.middleware');

const app = express();
const PORT = 3002;

app.use(express.json());
app.use(loggingMiddleware);
app.use('/orders', orderRoutes);

app.listen(PORT, () => {
    console.log(`Order Service listening on port ${PORT}`);
});