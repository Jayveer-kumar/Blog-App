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

module.exports = router;