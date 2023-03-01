const mongoose = require('mongoose');
const {Schema} = mongoose;

const PthologySchema = new mongoose.Schema({
    nameOfTest :{
        type : [String],
        require : true
    },
    
})

module.exports =  mongoose.model("Address",PthologySchema)