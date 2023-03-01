const Test = require('../models/Test.js')
const createNewTest = async (req, res, next) => {
    const newTest = new Test(req.body);
    try {
        const savedTest = await newTest.save();
        res.status(200).json(savedTest);
        // console.log(req.body.name);
    } catch (err) {
        // res.status(500).json(err);
        next(err);
    }
};
const updateTest = async (req, res,next) => {
    try {
        
        const updatedTest = await Test.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        console.log(updatedTest);
        res.status(200).json(updatedTest);
    }
    catch (err) {
        res.status(500).json(err);
    }
};

const deleteTest = async (req,res,next)=>{
    try{
        await Test.findByIdAndDelete(req.params.id);
        res.status(200).json("Test deleted");
    }catch(err){
        res.status(500).json(err);
    }
};

const getTest = async (req, res, next) => {
    try {
      const test = await Test.findById(req.params.id);
      res.status(200).json(test);
    } catch (err) {
      next(err);
    }
  };
const getTests = async (req, res, next) => {
    try {
      const tests = await Test.find();
      res.status(200).json(tests);
    } catch (err) {
      next(err);
    }
  };

module.exports = {createNewTest,updateTest,deleteTest,getTest,getTests};

