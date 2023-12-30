const Product = require('../../models/shop/product.model');
const logger = require('../../utils/logger');

class ProductService {

    async getAll(
        pageNum = 1,
        pageSize = 10,
        sort = {},
        filter = {}
    ) {

        pageNum = Number.isInteger(pageNum) && pageNum > 0 ? pageNum : 1;
        pageSize = Number.isInteger(pageSize) && pageSize > 0 ? pageSize : 10;

        try {
            const products = await Product.find(filter)
                .sort(sort)
                .skip((pageNum - 1) * pageSize)
                .limit(pageSize);

            const totalProducts = await Product.countDocuments(filter);

            return {
                products,
                total: totalProducts
            };
        } catch (err) {
            logger.error(err);
            throw err;
        }
    }
}


module.exports = new ProductService();