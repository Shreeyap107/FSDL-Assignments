const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

router.post("/signup", async (req,res)=>{
  const {name,email,phone,password} = req.body;
  const hash = await bcrypt.hash(password,10);
  const user = new User({name,email,phone,password:hash});
  await user.save();
  res.json({success:true,user});
});

router.post("/login", async (req,res)=>{
  const {email,password} = req.body;
  const user = await User.findOne({email});
  if(!user) return res.json({success:false});
  const match = await bcrypt.compare(password,user.password);
  if(!match) return res.json({success:false});
  res.json({success:true,user});
});

module.exports = router;
