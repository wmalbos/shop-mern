const router = require("express").Router();
const categories =  require ("../../controllers/shop/category.controller");

router.get("/", categories.getAllController);

module.exports = router;