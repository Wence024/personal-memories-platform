const orderService = require('../services/order.service');

const getOrderDetails = async (req, res) => {
    try {
        const orderDetails = await orderService.getOrderById(req.params.id);
        res.json(orderDetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getOrderDetails,
};