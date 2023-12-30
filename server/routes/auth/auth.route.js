const router = require("express").Router();
const auth =  require ("../../controllers/auth/auth.controller");

router.post("/signup", auth.signUpController);
router.post("/signin", auth.signInController);
router.post("/request-reset-password", auth.requestResetPasswordController);
router.post("/reset-password", auth.resetPasswordController);

module.exports = router;
