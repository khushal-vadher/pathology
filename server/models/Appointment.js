
const mongoose = require('mongoose');
const { Schema } = mongoose;

const PthologySchema = new mongoose.Schema({
    // name: {
    //     type: String,
    //     require: true
    // },
    // Address: {
    //     type: String,
    //     require: require
    // },
    // mobile: {
    //     type: Number,
    //     require: require,
    //     unique : true
    // },
    // email: {

    //     type: String,
    //     trim: true,
    //     lowercase: true,
    //     unique: false,
    //     required: true,
        
    //     match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

    // },
    // nameOfTest: {
    //     type: [String], // [] => for allow more then one test at a single appointment
    //     require: require
    // },
    // // slot: {
    // //     type: ISODate("2022-05-04T12:00:53.307Z"), //think about it ...is it coorect choice for slot.
    // //     require: true
    // // },
    // isDoctorRef: {
    //     type: Boolean,
    //     require: true
    // },
    // doctor: {
    //     type: String,
    //     require: false
    // },
    // doctor_email: {
    //     type: String,
    //     trim: true,
    //     lowercase: true,
    //     required: false,
        
    //     match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    // }
    name :{
        type : String
    }
});

// export default mongoose.model("Appointment" ,PthologySchema)
module.exports = mongoose.model("Appointment", PthologySchema)
// mongoose.models.exports = mongoose.model("Appointment",PthologySchema)