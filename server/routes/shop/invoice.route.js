const router = require("express").Router();
const invoices =  require ("../../controllers/shop/invoice.controller");

router.get("/", invoices.getAllController);

module.exports = router;