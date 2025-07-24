const { login, checkLoginStatus, contactMail } = require("../routes/contorllers_import");
const { VerifyToken } = require("../helpers/shared.helper");
const { changePassword, forgotPassword, VerifyResetLink, resetPassword } = require("../controllers/auth.contoller");
const router = require("express").Router();

router.post("/login", login);

router.get("/check-login", VerifyToken, checkLoginStatus);

router.post("/change_password", VerifyToken, changePassword);

router.post("/forgot_password", forgotPassword);

router.get("/verifyreset_link/:id", VerifyResetLink);

router.post("/reset-password", resetPassword);

module.exports = router;
