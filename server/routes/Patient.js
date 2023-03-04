const express = require('express');
const createError = require('../controller/error.js');
const {createNewPatient,updatePatient,deletePatient,getPatient,getPatients} = require("../controller/Patient.js")
const router = express.Router();




//CRAETE
router.post("/create" , createNewPatient);

//UPDATE
router.put("/update/:id",updatePatient);


//DELETE
router.delete("/delete/:id",deletePatient);

//GET
router.get("/:id", getPatient);


//GET ALL
router.get("/", getPatients);


module.exports = router;