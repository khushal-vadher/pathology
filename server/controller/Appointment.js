const Appointment = require('../models/Appointment.js')
const createNewAppointment = async (req, res, next) => {
    const newAppointment = new Appointment(req.body);
    try {
        const savedAppointment = await newAppointment.save();
        res.status(200).json(savedAppointment);
        // console.log(req.body.name);
    } catch (err) {
        // res.status(500).json(err);
        next(err);
    }
};
const updateAppointment = async (req, res,next) => {
    try {
        
        const updatedAppointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        console.log(updatedAppointment);
        res.status(200).json(updatedAppointment);
    }
    catch (err) {
        res.status(500).json(err);
    }
};

const deleteAppointment = async (req,res,next)=>{
    try{
        await Appointment.findByIdAndDelete(req.params.id);
        res.status(200).json("Appointment deleted");
    }catch(err){
        res.status(500).json(err);
    }
};

const getAppointment = async (req, res, next) => {
    try {
      const appointment = await Appointment.findById(req.params.id);
      res.status(200).json(appointment);
    } catch (err) {
      next(err);
    }
  };
const getAppointments = async (req, res, next) => {
    try {
      const appointments = await Appointment.find();
      res.status(200).json(appointments);
    } catch (err) {
      next(err);
    }
  };

module.exports = {createNewAppointment,updateAppointment,deleteAppointment,getAppointment,getAppointments};

