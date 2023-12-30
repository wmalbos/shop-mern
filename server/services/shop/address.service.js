const Address = require('../../models/shop/address.model');
const logger = require('../../utils/logger');

class AddressService {
    async getAll(
        pageNum = 1,
        pageSize = 10,
        sort = {},
        filter = {}
    ) {

        pageNum = Number.isInteger(pageNum) && pageNum > 0 ? pageNum : 1;
        pageSize = Number.isInteger(pageSize) && pageSize > 0 ? pageSize : 10;

        try {
            const addresses = await Address.find(filter)
                .sort(sort)
                .skip((pageNum - 1) * pageSize)
                .limit(pageSize);

            const totalAddresses = await Address.countDocuments({});

            return {
                addresses,
                total: totalAddresses
            };
        } catch (err) {
            logger.error(err)
            throw err;
        }
    }
}

module.exports = new AddressService();