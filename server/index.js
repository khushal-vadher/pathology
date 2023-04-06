const express = require('express');
const mongoose = require('mongoose');
const AppointmentRoutes = require('./routes/Appointment.js')
const TestRoutes = require("./routes/Test.js")
const Report = require("./routes/Report.js")
const connectDB = require('./config/dbconnect.js');
require('dotenv').config();
const userRoutes = require("./routes/User.js")
const authRoutes = require("./routes/Auth.js")
const Address = require('./routes/Address.js')
// const cookie = require('cookie')
const bodyParser = require('body-parser');
const Patient = require('./routes/Patient.js');
const  app = express();
const Mail = require("./routes/Mail.js")

//for connection to the mongodb atlas
connectDB();


app.use(express.json());
app.use(bodyParser());

// app.use(cors());

// routes
app.use("/users", userRoutes);
app.use("/auth", authRoutes);


app.use('/appointment',AppointmentRoutes); //for user
app.use('/test',TestRoutes); //for admin (CRUD)
app.use('/report',Report); //for admin (get getAll)
app.use('/patient',Patient)
app.use('/address',Address)
app.use('/mail',Mail)

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