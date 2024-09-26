import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  fullName: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    unique: true,
    required: true,
  },
 
},{timestamps: true});

const user =  mongoose.model("User", userModel);
 export default user;