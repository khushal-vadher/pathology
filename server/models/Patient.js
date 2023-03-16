const mongoose = require('mongoose');
const {Schema} = mongoose;


const PthologySchema = new mongoose.Schema({
    nameOfPatient :{
        type : String,
        require : true
    },
    user:{
        type: String,
        require :true
    },
    address:{
        type : [String], // list of disease for which this test can be done
        require: true
    },
    age : {
        type : Number,
        require : true
    },
    gender:{
        type:String,
        require:true
    }
   
})

module.exports =  mongoose.model("Patient",PthologySchema)