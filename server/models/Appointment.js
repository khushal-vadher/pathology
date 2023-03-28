
const mongoose = require('mongoose');
const { Schema } = mongoose;

const PthologySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    Address: {
        type: String,
        require: true
    },
    mobile: {
        type: Number,
        require: false
    },
    email: {

        type: String,
        trim: true,
        lowercase: true,
        unique: false,
        required: true,
        unique: true,
        
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

    },
    nameOfTest: {
        type: [String], // [] => for allow more then one test at a single appointment
        require: true
    },
    data :{
        type : String,
        require : true
    },
    slot: {
        type: String,
        require: true
    },
    isDoctorRef: {
        type: Boolean,
        require: false
    },
    doctor: {
        type: String,
        require: false
    },
    doctor_email: {
        type: String,
        trim: true,
        lowercase: true,
        required: false,
        
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
  
});

module.exports = mongoose.model("Appointment", PthologySchema)
