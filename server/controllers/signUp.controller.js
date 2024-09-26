import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

export const signUpController = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    //Check whether all the fields are filled
    if (!fullName || !email || !password) {
      res.status(400).json({
        message: "All fields must be filled",
        success: false,
      });
    }

    // Check whether it is an existing user
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(401).json({
        message: "User already exists",
      });
    }

    // Hash the password prior saving it into the database
    const hashedPassword = bcryptjs.hashSync(password,10)

    // If user does not exist , create a new one
    const newUser = await User.create({
      fullName,
      email,
      password:hashedPassword,
    });

    //If the user created successfully , send it to the server excluding the password
    res.status(200).json({
      message: "User created successfully",
      success: true,
      newUser: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        password: newUser.password
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};
