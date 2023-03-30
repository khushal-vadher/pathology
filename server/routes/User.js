const router = require("express").Router();
const { User, validate } = require("../models/User.js");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});


router.put("/update/:id",async(req,res)=>{
	try{
		const updateUser = await User.findByIdAndUpdate(
			req.params.id,
			{$set : req.body},
			{new:true}
		);
		console.log(updateUser);
		res.status(200).json(updateUser);
	}catch(err){
		res.status(500).json(err);
	}
});


router.delete("/delete/:id",async(req , res)=>{
	try{
		await User.findByIdAndDelete(req.params.id);
		res.status(200).json("User Deleted !!");
	}catch(err){
		console.log(err);
		res.status(500).json(err);
	}
})

router.get("/get/:id",async(req,res)=>{
	try{
		const user =  await User.findById(req.params.id);
		res.status(200).json(user);
	}catch(err){
		console.log(err);
		res.status(500).json(err);
	}
})

router.get("/getall",async(req,res)=>{
	try{
		const users = await User.find();
	res.status(200).json(users);
	}catch(err){
		console.log(err);
		res.status(500).json(err)
	}
})


module.exports = router;