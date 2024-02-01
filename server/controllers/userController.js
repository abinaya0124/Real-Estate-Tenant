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

export const bookVisit = asyncHandler(async (req, res) => {
  const { email, date } = req.body;
  const { id } = req.params;

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(500)
        .json({ message: "You have already booked a visit" });
    }
    const alreadyBooked = user.bookVisits || [];
    const hasBookedVisit = alreadyBooked.some((visit) => visit.id === id);

    if (hasBookedVisit) {
      return res
        .status(400)
        .json({ message: "This residency has already booked a visit by you" });
    } else {
      await User.updateOne(
        { email },
        {
          $push: {
            bookedVisits: { id, date },
          },
        }
      );
      await user.save();
      res.status(200).json({ message: "Visit booked successfully" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});
