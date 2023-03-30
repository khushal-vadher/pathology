const mongoose = require('mongoose');
const {Schema} = mongoose;

const PthologySchema = new mongoose.Schema({
    nameOfTest :{
        type : String,
        require : true
    },
    disease:{
        type : String, // list of disease for which this test can be done
        require: true
    },
    amount : {
        type : Number,
        require : true
    },
    // collection of sample required for test 
    //eg : bool , urine, saliva, sputum, feces, semen, and other bodily fluids 
    sampleReq :{
        type : String,
        require : true

    }
})

module.exports =  mongoose.model("Test",PthologySchema)