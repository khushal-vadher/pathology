const express = require('express');
const mongoose = require('mongoose');
const AppointmentRoutes = require('./routes/Appointment.js')
const TestRoutes = require("./routes/Test.js")
const Report = require("./routes/Report.js")
const connectDB = require('./config/dbconnect.js');
require('dotenv').config();

const bodyParser = require('body-parser');
const  app = express();


//for connection to the mongodb atlas
connectDB();


app.use(express.json());
app.use(bodyParser());



// app.get("/hey",(req,res)=>{
//     res.send("This is data form server");
// });
// app.get("/hey1",(req,res)=>{
//     console.log("hey")
//     res.send("hey");
// });



app.use('/appointment',AppointmentRoutes); //for user
app.use('/test',TestRoutes); //for admin (CRUD)
app.use('/report',Report); //for admin (get getAll)

app.use((err,req,res,next)=>{
    const errorStatus = err.status|| 500 ;
    const errorMessage = err.message || "Somthing went wrong !";
    return res.status(errorStatus).json({
        success : false,
        status : errorStatus,
        message : errorMessage,
        stack : err.stack ,
    });
})

//port listen
app.listen(process.env.PORT || 5000 ,()=>{
    console.log("Server started!");
});