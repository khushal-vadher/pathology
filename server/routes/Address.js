const express = require('express');
const createError = require('../controller/error.js');

const {createNewAddress,updateAddress,deleteAddress,deleteManyAddress,getAddress,getAddresss,getAddressByUserid} = require('../controller/Address.js');

const router = express.Router();



//CRAETE
router.post("/create" , createNewAddress);

//UPDATE
router.put("/update/:id",updateAddress);


//DELETE
router.delete("/delete/:id",deleteAddress);

router.post("/deletemany",deleteManyAddress);

//GET
router.get("/:id", getAddress);

router.post("/get" ,getAddressByUserid)


//GET ALL
router.get("/", getAddresss);


module.exports = router;


