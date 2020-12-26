const express = require("express");
const router = express.Router();
const percentageController = require("../controllers/PercentageController");

router.get("/", percentageController.getPercentage);
module.exports = router;
