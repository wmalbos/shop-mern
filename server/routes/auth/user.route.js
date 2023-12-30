const router = require("express").Router();
const user =  require ("../../controllers/shop/user.controller");

router.get("/profile", user.profileController);
router.put("/profile", user.updateProfileController);
router.put("/profile/change-password", user.changePasswordController);

module.exports = router;
