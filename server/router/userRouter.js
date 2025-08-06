const express = require("express");
const router = express.Router();
const User = require("../models/user");

const multer = require("multer");
const { cloudinary, storage } = require("../config/cloudinary");
const upload = multer({ storage: storage });
const { registerUser, loginUser , logoutUser } = require("../controlers/authController");

router.post("/signin", upload.single("image"), registerUser);
router.post("/login", loginUser);
router.post("/logout",logoutUser);

// router.post("/signin",async(req,res)=>{
//     console.log("Signin Router is Working : ");
//     console.log("Below is Signin req.body : ");
//     console.log(req.body);
//     // return res.status(200).json({message:"Signin Router is working : "});
//     return res.status(200).json({
//         success:true,
//         message:"Signin successful",
//     })
// })

// router.post("/login",(req,res)=>{
//     console.log("Login Router is Working : ");
//     console.log("Below is Login req.body : ");
//     console.log(req.body);
//     // return res.status(200).json({ success:true, message:"Login successfully : "});
//     return res.status(400).json({
//         success:false,
//         message:"Login Failed",
//         errors:{
//             email:"Invalid Email",
//             password:"Invalid Password"
//         }
//     })
// })


module.exports = router;