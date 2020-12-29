const express = require("express");
const router = express.Router();
const percentageController = require("../controllers/PercentageController");

// Creating Routes
router.get("/", percentageController.getPercentage);
router.post("/percentage", percentageController.calculatePercentage);
router.post("/percentof", percentageController.calculatePercentOf);
router.post("/percentfrom", percentageController.calculatePercentFrom);

module.exports = router;
