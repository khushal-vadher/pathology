const express = require('express');
const createError = require('../controller/error.js');
const  {createNewAppointment,updateAppointment,deleteAppointment,getAppointment,getAppointments}  = require("../controller/Appointment.js");

const router = express.Router();




//CRAETE
router.post("/create" , createNewAppointment);

//UPDATE
router.put("/update/:id",updateAppointment);


//DELETE
router.delete("/delete/:id",deleteAppointment);

//GET
router.get("/:id", getAppointment);


//GET ALL
router.get("/", getAppointments);


module.exports = router;