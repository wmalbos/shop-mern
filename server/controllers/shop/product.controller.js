const productService = require('../../services/shop/product.service');
const {sendResponse} = require('../../utils/helpers');
const logger = require('../../utils/logger');

const getAllController = async (req, res, next) => {

    const pageNum = parseInt(req.query.pageNum) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const sort = req.query.sort || {};
    const filter = req.query.filter || {};

    try {
        const {products, total} = await productService.getAll(pageNum, pageSize, sort, filter);

        return sendResponse({
            res,
            data: {
                products,
                total,
            },
        })
    } catch (error) {
        logger.error(error);
        next(error);
    }
}

module.exports = {
    getAllController
};