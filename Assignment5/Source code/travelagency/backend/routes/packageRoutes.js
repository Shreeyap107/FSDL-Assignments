const express = require("express");
const router = express.Router();
const Package = require("../models/Package");

router.get("/", async (req,res)=>{
  const data = await Package.find();
  res.json(data);
});

router.post("/", async (req,res)=>{
  const pkg = new Package(req.body);
  await pkg.save();
  res.json(pkg);
});

module.exports = router;
