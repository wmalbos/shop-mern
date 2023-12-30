const router = require("express").Router();
const discounts =  require ("../../controllers/shop/discount.controller");

router.get("/", discounts.getAllController);

module.exports = router;