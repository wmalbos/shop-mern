const {
    getAllController
} = require ("../../controllers/shop/product.controller");

const router = require("express").Router();

router.get("/", getAllController);

module.exports = router;