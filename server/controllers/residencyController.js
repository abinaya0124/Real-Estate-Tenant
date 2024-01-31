import asyncHandler from "express-async-handler";
import Residency from "../models/residencies.js";
import User from "../models/user.js"; // Import the User model

export const createResidency = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    country,
    city,
    facilities,
    image,
    userEmail,
  } = req.body.data;

  try {
    const user = await User.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const residency = new Residency({
      title,
      description,
      price,
      address,
      country,
      city,
      facilities,
      image,
      userEmail,
      owner: user._id,
    });

    await residency.save();
    res.status(201).json(residency);
    console.log(residency);
  } catch (error) {
    if (error.code === 11000) {
      res
        .status(400)
        .json({ message: "A residency with the same address already exists." });
    } else {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
});

export const getAllResidencies = asyncHandler(async (req, res) => {
  try {
    const residencies = await Residency.find().sort({ createdAt: -1 }); // Sort by createdAt in descending order
    res.status(200).json(residencies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export const getResidency = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const residency = await Residency.findById(id);
    if (!residency) {
      return res.status(404).json({ message: "Residency is not found here!" });
    }
    res.status(200).json(residency);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});
