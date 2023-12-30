const Cart = require('../../models/shop/cart.model');
const logger = require('../../utils/logger');

class CartService {
    async getAll(
        pageNum = 1,
        pageSize = 10,
        sort = {},
        filter = {}
    ) {

        pageNum = Number.isInteger(pageNum) && pageNum > 0 ? pageNum : 1;
        pageSize = Number.isInteger(pageSize) && pageSize > 0 ? pageSize : 10;

        try {
            const carts = await Cart.find(filter)
                .sort(sort)
                .skip((pageNum - 1) * pageSize)
                .limit(pageSize);

            const totalCarts = await Cart.countDocuments({});

            return {
                carts,
                total: totalCarts
            };
        } catch (err) {
            logger.error(err)
            throw err;
        }
    }
}

module.exports = new CartService();