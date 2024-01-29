import asyncHandler from "express-async-handler";
import User from "../models/user.js";
// import { prisma } from "../config/prismaConfig.js";

export const createUser = asyncHandler(async (req, res) => {
  console.log("Creating a user");

  let { username, email, password } = req.body;
  const userExists = await User.findUnique({ where: { email: email } });
  if (!userExists) {
    const newUser = new User({ username, email, password });
    const saveUser = await newUser.save();
    res.status(200).json(saveUser);
    // res.send({
    //   message: "User Registered Successfully",
    //   user: user,
    // });
  } else
    res.status(201).send({ message: "User Already Registered Successfully" });
});
