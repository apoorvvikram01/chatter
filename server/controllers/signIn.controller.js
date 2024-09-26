import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signInController = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check whether the required fields are present
    if (!email || !password) {
      res.send(400).json({
        message: "All the fields are required",
        success: false,
      });
    }

    //Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    //If user found then compare the password with the hashed password
    const comparePassword = bcryptjs.compareSync(password, user.password);
    if (!comparePassword) {
      res.status(402).send({
        message: "Email and password does not match",
        success: false,
      });
    }
    
    //If everything is ok, save the user
    user.save();

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      email: user.email,
      password: user.password,
      id: user._id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
