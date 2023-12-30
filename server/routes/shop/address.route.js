const router = require("express").Router();
const addresses =  require ("../../controllers/shop/address.controller");

router.get("/", addresses.getAllController);

module.exports = router;