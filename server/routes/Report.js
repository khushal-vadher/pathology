const express = require('express');
const createError = require('../controller/error.js');
const {getReport,getReports} = require("../controller/Report.js")
const router = express.Router();



//GET
router.get("/:id", getReport);


//GET ALL
router.get("/", getReports);


module.exports = router;