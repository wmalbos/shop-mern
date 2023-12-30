const Category = require('../../models/shop/category.model');
const logger = require('../../utils/logger');

class CategoryService {
    async getAll(
        pageNum = 1,
        pageSize = 10,
        sort = {},
        filter = {}
    ) {

        pageNum = Number.isInteger(pageNum) && pageNum > 0 ? pageNum : 1;
        pageSize = Number.isInteger(pageSize) && pageSize > 0 ? pageSize : 10;

        try {
            const categories = await Category.find(filter)
                .sort(sort)
                .skip((pageNum - 1) * pageSize)
                .limit(pageSize);

            const totalCategories = await Category.countDocuments({});

            return {
                categories,
                totla: totalCategories
            };
        } catch (err) {
            logger.error(err)
            throw err;
        }
    }
}

module.exports = new CategoryService();