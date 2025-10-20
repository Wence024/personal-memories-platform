const axios = require('axios');

const getOrderById = async (orderId) => {
    // In a real application, you would fetch order data from a database
    const order = { id: orderId, userId: 1, product: 'Laptop' };

    // Fetch user data from the User Service
    const userResponse = await axios.get(`http://localhost:3001/users`);
    const user = userResponse.data.find(u => u.id === order.userId);

    return {
        order,
        user,
    };
};

module.exports = {
    getOrderById,
};