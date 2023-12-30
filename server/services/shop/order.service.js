const Order = require('../../models/shop/order.model');
const logger = require('../../utils/logger');

class OrderService {
    async getAll(
        pageNum = 1,
        pageSize = 10,
        sort = {},
        filter = {}
    ) {

        pageNum = Number.isInteger(pageNum) && pageNum > 0 ? pageNum : 1;
        pageSize = Number.isInteger(pageSize) && pageSize > 0 ? pageSize : 10;

        try {
            const orders = await Order.find(filter)
                .sort(sort)
                .skip((pageNum - 1) * pageSize)
                .limit(pageSize);

            const totalOrders = await Order.countDocuments({});

            return {
                orders,
                total: totalOrders
            };
        } catch (err) {
            logger.error(err)
            throw err;
        }
    }
}

module.exports = new OrderService();