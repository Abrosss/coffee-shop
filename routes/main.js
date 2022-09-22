const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main");


//Main Routes - simplified for now
router.get("/home", mainController.getHome);
router.get("/about", mainController.getAbout);
router.get("/plan", mainController.getPlan);
// router.get("/feed", ensureAuth, postsController.getFeed);
// router.get("/login", authController.getLogin);
// router.post("/login", authController.postLogin);
// router.get("/logout", authController.logout);
// router.get("/signup", authController.getSignup);
// router.post("/signup", authController.postSignup);

module.exports = router;
