const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const image = req.file;

    if (!name || !email || !password || !image) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ success: false, message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      image: {
        url: image.path,
        filename: image.filename
      }
    });

    await user.save();
    res.status(201).json({ success: true, message: "User registered successfully" });

  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid password" });
    }

    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    console.log(token);

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,token,
      userId: existingUser._id,
      user: {
        name: existingUser.name,
        email: existingUser.email,
        image: existingUser.image.url,
      }
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.logoutUser = (req, res) => {
  res.clearCookie("token");
  res.status(200).json(
    { success: true,
      message: "Logged out successfully" 
    });
}
