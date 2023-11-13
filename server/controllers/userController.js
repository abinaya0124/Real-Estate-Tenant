import asyncHandler from "express-async-handler";

import { prisma } from "../config/prismaConfig.js";

export const createUser = asyncHandler(async (req, res) => {
  console.log("Creating a user");

  let { email } = req.body;
  //   console.log(email);
  const userExists = await prisma.user.findUnique({ where: { email: email } });
  if (!userExists) {
    const user = await prisma.user.create({ data: req.body });
    res.send({
      message: "User Registered Successfully",
      user: user,
    });
  }
  // res.send(201).json({ message: "User Already Registered Successfully" });
  else
    res.status(201).send({ message: "User Already Registered Successfully" });
});
