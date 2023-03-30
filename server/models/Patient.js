const mongoose = require('mongoose');
const {Schema} = mongoose;


const PthologySchema = new mongoose.Schema({
    nameOfPatient :{
        type : String,
        require : true
    },
    user_id:{ //objectId of logged in user
        type: String,
        require :true
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