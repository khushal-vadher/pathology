const mongoose = require('mongoose');
const {Schema} = mongoose;

const PthologySchema = new mongoose.Schema({
    user:{ //user is user with is logged in (registered in website)
        type : String,
        require: true
    },
    nameOfReport :{
        type : String, //simply its name of test
        require : true
    },
    patientName:{ // patient with may or may not be registered on website
        type : String,
        require :true
    },
    address :{
        type : String,
        require:true
    },
    amount :{
        type : Number,
        require: true
    }
})

module.exports =  mongoose.model("Report",PthologySchema)