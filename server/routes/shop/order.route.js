const router = require("express").Router();
const orders =  require ("../../controllers/shop/order.controller");

router.get("/", orders.getAllController);

module.exports = router;