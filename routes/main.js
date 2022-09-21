const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main");


//Main Routes - simplified for now
router.get("/home", mainController.getIndex);

// router.get("/feed", ensureAuth, postsController.getFeed);
// router.get("/login", authController.getLogin);
// router.post("/login", authController.postLogin);
// router.get("/logout", authController.logout);
// router.get("/signup", authController.getSignup);
// router.post("/signup", authController.postSignup);

module.exports = router;
