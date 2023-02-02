const Appointment = require('../models/Appointment.js')
const createNewAppointment = async (req,res,next ) => {
    console.log(req.body);
    const newAppointment = new Appointment(req.body);
    try{
        const savedAppointment = await newAppointment.save();
        res.status(200).json(savedAppointment);
    }catch(err){
        // res.status(500).json(err);
        next(err);
    }
}

module.exports= createNewAppointment;