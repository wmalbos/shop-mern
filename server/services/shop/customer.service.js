const Customer = require('../../models/shop/customer.model');
const logger = require('../../utils/logger');

class CustomerService {
    async getAll(
        pageNum = 1,
        pageSize = 10,
        sort = {},
        filter = {}
    ) {

        pageNum = Number.isInteger(pageNum) && pageNum > 0 ? pageNum : 1;
        pageSize = Number.isInteger(pageSize) && pageSize > 0 ? pageSize : 10;

        try {
            const customers = await Customer.find(filter)
                .sort(sort)
                .skip((pageNum - 1) * pageSize)
                .limit(pageSize);

            const totalCustomers = await Customer.countDocuments({});

            return {
                customers,
                total: totalCustomers
            };
        } catch (err) {
            logger.error(err)
            throw err;
        }
    }
}

module.exports = new CustomerService();