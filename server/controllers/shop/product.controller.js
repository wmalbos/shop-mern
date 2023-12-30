const {
    getAllProducts
} = require('../../services/shop/product.service');

const { sendResponse } = require('../../utils/helpers');

const getAllController = async (req, res, next) => {
    try {
        const products = await getAllProducts();
        return sendResponse({
            res,
            data: {products},
            total : products.length
        })

    }catch(error){
        next(error);
    }
}

module.exports = {
    getAllController
};