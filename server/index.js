const express = require('express');
const mongoose = require('mongoose');
const AppointmentRoutes = require('./routes/Appointment.js')
const connectDB = require('./config/dbconnect.js');
// const { default: Appointment } = require('./models/Appointment.js');
// const Appointment  = require('./controller/Appointment.js')
// const routes = require('./routes/app.js');

const  app = express();

//for connection to the mongodb atlas
connectDB();

// app.get("/",(req,res)=>{
//     res.send("This is data form server");
// });
app.get("/hey",(req,res)=>{
    console.log("hey")
    res.send("hey")
});


app.use('/appointment',AppointmentRoutes);


//port listen
app.listen(5000 ,()=>{
    console.log("Server started!");
});