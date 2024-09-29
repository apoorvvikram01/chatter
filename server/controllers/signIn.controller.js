import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"

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
      res.status(402).json({
        message: "Email and password does not match",
        success: false,
      });
    }
    
    //Creata a jwt token
    const token = jwt.sign({id: user.id},process.env.JWT_SECRET,{expiresIn: '1d'})

    res.status(200).cookie("token",
      token,
      {
        httpOnly: true,

      }
    )
    

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      email: user.email,
      password: user.password,
      id: user._id,
      token
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
