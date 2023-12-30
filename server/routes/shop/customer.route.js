const router = require("express").Router();
const customers =  require ("../../controllers/shop/customer.controller");

router.get("/", customers.getAllController);

module.exports = router;