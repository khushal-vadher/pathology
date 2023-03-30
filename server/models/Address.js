const mongoose = require('mongoose');
const {Schema} = mongoose;

const PthologySchema = new mongoose.Schema({
    user_id :{ //Object id of logged in user
        type : String,
        require :true
    },
    address :{
        type : String,
        require : true
    },
    
})

module.exports =  mongoose.model("Address",PthologySchema)