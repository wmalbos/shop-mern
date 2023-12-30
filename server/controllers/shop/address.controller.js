const addressService = require('../../services/shop/address.service');
const {sendResponse} = require('../../utils/helpers');
const logger = require('../../utils/logger');

const getAllController = async (req, res, next) => {

    const pageNum = parseInt(req.query.pageNum) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const sort = req.query.sort || {};
    const filter = req.query.filter || {};

    try {
        const {addresses, total} = await addressService.getAll(pageNum, pageSize, sort, filter);

        return sendResponse({
            res,
            data: {
                addresses,
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