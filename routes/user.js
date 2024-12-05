const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middlewares.js");

const userControllers = require("../controllers/user.js");

router.route("/signup")
.get( userControllers.renderSignupForm)
.post( wrapAsync(userControllers.signUp));

router.route("/login")
.get(userControllers.renderLoginForm)
.post(saveRedirectUrl ,passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), userControllers.login);

router.get("/logout", userControllers.logOut);

module.exports = router;