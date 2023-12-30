const Discount = require('../../models/shop/invoice.model');
const logger = require('../../utils/logger');

class DiscountService {
    async getAll(
        pageNum = 1,
        pageSize = 10,
        sort = {},
        filter = {}
    ) {

        pageNum = Number.isInteger(pageNum) && pageNum > 0 ? pageNum : 1;
        pageSize = Number.isInteger(pageSize) && pageSize > 0 ? pageSize : 10;

        try {
            const discounts = await Discount.find(filter)
                .sort(sort)
                .skip((pageNum - 1) * pageSize)
                .limit(pageSize);

            const totalDiscounts = await Discount.countDocuments({});

            return {
                discounts,
                total: totalDiscounts
            };
        } catch (err) {
            logger.error(err)
            throw err;
        }
    }
}

module.exports = new DiscountService();