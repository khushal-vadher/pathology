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

const deleteManyAddress = async (req,res,next) =>{
  try {
  console.log("Address")
  console.log(req.body.id)

    const add = await Address.deleteMany({
      user_id : req.body.id
    })
    console.log(add)
    console.log("Many Addresses Deleted")
    res.status(200).json(add)
  } catch (error) {
    console.log(err)
    res.status(500).json(err)
  }
}

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

  
const getAddressByUserid = async (req, res, next) => {
  try {
    const id = req.body.userid
    // console.log(req.params.userid)
    const address = await Address.find({
      user_id : id
    });
    console.log(address)
    res.status(200).json(address);
  } catch (err) {
    next(err);
  }
};

module.exports = {createNewAddress,updateAddress,deleteAddress,deleteManyAddress,getAddress,getAddresss,getAddressByUserid};

