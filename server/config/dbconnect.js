const mongoose = require('mongoose');
require("dotenv").config()
const url = process.env.URL;
const connectDB =async ()=>{
    try{
        await mongoose.connect(url);
        console.log("connected to mongoDB atlas!");
        // console.log(process.env.URL)
    }catch(err){
        console.log(err);
    }
}

module.exports = connectDB;