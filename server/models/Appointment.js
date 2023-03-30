
const mongoose = require('mongoose');
const { Schema } = mongoose;

const PthologySchema = new mongoose.Schema({
    user_id:{ //objectId of logged in user
        type: String,
        require :true
    },
    nameOfTest: {
        type: String, // [] => for allow more then one test at a single appointment
        require: true
    },
    disease:{
        type : String, // list of disease for which this test can be done
        require: true
    },
    amount : {
        type : Number,
        require : true
    },
   
    sampleReq :{
        type : String,
        require : true

    },
    nameOfPatient :{
        type : String,
        require : true
    },
    
    age : {
        type : Number,
        require : true
    },
    gender:{
        type:String,
        require:true
    },
    address: {
        type: String,
        require: true
    },
    date :{
        type : String,
        require : true
    },
    slot: {
        type: String,
        require: true
    }
  
});

module.exports = mongoose.model("Appointment", PthologySchema)
