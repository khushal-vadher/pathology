const mongoose = require('mongoose');
const uri = "mongodb+srv://khushal044:sdpkkr6@pathology.6ipdyqm.mongodb.net/?retryWrites=true&w=majority"


const connectDB =async ()=>{
    try{
        await mongoose.connect(uri);
        console.log("connected to mongoDB atlas!");
    }catch(err){
        console.log(err);
    }
}