import asyncHandler from "express-async-handler";
import User from "../models/user.js";

export const createUser = asyncHandler(async (req, res) => {
  console.log("Creating a user");

  let { username, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (!userExists) {
    const newUser = new User({ username, email, password });
    const saveUser = await newUser.save();
    res.status(200).json(saveUser);
  } else
    res.status(201).send({ message: "User Already Registered Successfully" });
});
