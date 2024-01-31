import asyncHandler from "express-async-handler";
import Residency from "../models/residencies.js";

export const createResidency = asyncHandler(async (req, res) => {
  // console.log("endpoint checking");
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
  console.log(req.body.data);
  try {
    const residency = new Residency({
      data: {
        title,
        description,
        price,
        address,
        country,
        city,
        facilities,
        image,
        owner: user._id,
      },
    });
    await residency.save();
    res.status(201).json(residency);
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error (MongoError code for duplicate key)
      res
        .status(400)
        .json({ message: "A residency with the same address already exists." });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
});
