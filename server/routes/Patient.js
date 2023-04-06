const express = require('express');
const createError = require('../controller/error.js');
const {createNewPatient,updatePatient,deletePatient,deleteManyPatient,getPatient,getPatients,getPatientByUserid} = require("../controller/Patient.js")
const router = express.Router();




//CRAETE
router.post("/create" , createNewPatient);

//UPDATE
router.put("/update/:id",updatePatient);


//DELETE
router.delete("/delete/:id",deletePatient);

//DELETE MANY AND ACCORDING TO USER_ID
router.post("/deletemany",deleteManyPatient);



//GET BY USER ID
router.post("/get", getPatientByUserid);

//GET
router.get("/:id", getPatient);


//GET ALL
router.get("/", getPatients);


module.exports = router;