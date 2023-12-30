const router = require("express").Router();
const products =  require ("../../controllers/shop/product.controller");

router.get("/", products.getAllController);

module.exports = router;