const express = require('express');
const createError = require('../controller/error.js');
const {createNewTest,updateTest,deleteTest,getTest,getTests} = require("../controller/Test.js")
const router = express.Router();




//CRAETE
router.post("/create" , createNewTest);

//UPDATE
router.put("/update/:id",updateTest);


//DELETE
router.delete("/delete/:id",deleteTest);

//GET
router.get("/:id", getTest);


//GET ALL
router.get("/", getTests);


module.exports = router;