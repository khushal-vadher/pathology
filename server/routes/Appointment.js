const express = require('express');
const Appointment = require("../models/Appointment.js");
const createError = require('../controller/error.js');
const  createNewAppointment  = require("../controller/Appointment.js");
const router = express.Router();
router.get('/',(req,res)=>{
    res.send("Hey from apointment")
})

router.post("/create",async (req,res,next)=>{
    const newAppointment = new Appointment(req.body);
    try{
        const savedAppointment = await newAppointment.save();
        console.log(req.body);
        res.status(200).json(savedAppointment);
    }catch(err){
        // res.status(500).json(err);
        // next(err);
        console.log(err)
    }
});

// router.post("/create" , createNewAppointment);

module.exports = router;