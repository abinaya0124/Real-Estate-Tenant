import mongoose from "mongoose";

const ResidencySchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  image: {
    type: String,
  },
  facilities: {
    type: mongoose.Schema.Types.Mixed,
  },
  userEmail: {
    type: String,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Assuming 'User' is the model name for the User schema
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Residency = mongoose.model("Residency", ResidencySchema);
export default Residency;
