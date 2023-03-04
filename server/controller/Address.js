const Address = require('../models/Address.js')
const createNewAddress = async (req, res, next) => {
    const newAddress = new Address(req.body);
    try {
        const savedAddress = await newAddress.save();
        res.status(200).json(savedAddress);
        // console.log(req.body.name);
    } catch (err) {
        // res.status(500).json(err);
        next(err);
    }
};
const updateAddress = async (req, res,next) => {
    try {
        
        const updatedAddress = await Address.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        console.log(updatedAddress);
        res.status(200).json(updatedAddress);
    }
    catch (err) {
        res.status(500).json(err);
    }
};

const deleteAddress = async (req,res,next)=>{
    try{
        await Address.findByIdAndDelete(req.params.id);
        res.status(200).json("Address deleted");
    }catch(err){
        res.status(500).json(err);
    }
};

const getAddress = async (req, res, next) => {
    try {
      const address = await Address.findById(req.params.id);
      res.status(200).json(address);
    } catch (err) {
      next(err);
    }
  };
const getAddresss = async (req, res, next) => {
    try {
      const addresss = await Address.find();
      res.status(200).json(addresss);
    } catch (err) {
      next(err);
    }
  };

module.exports = {createNewAddress,updateAddress,deleteAddress,getAddress,getAddresss};
