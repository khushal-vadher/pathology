const { Router } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/dbconnect');
const routes = require('./routes/main.js');

const  app = express();

//for connection to the mongodb atlas
connectDB();

// app.get("/",(req,res)=>{
//     res.send("This is data form server");
// });

app.use('',routes);


//port listen
app.listen(5000 ,()=>{
    console.log("Server started!");
});