const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main");



router.get("/", mainController.getHome);
router.get("/about", mainController.getAbout);
router.get("/plan", mainController.getPlan);

module.exports = router;
