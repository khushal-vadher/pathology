const express = require("express");
const routes = express.Router();

//routes for user 
routes.get("/user",(req,res)=>{
    const u={"mess":"khushal"};
    res.send(u);
});

module.exports = routes;
