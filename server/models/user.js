import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    bookedVisits: {
      type: [mongoose.Schema.Types.Mixed],
    },
    favResidenciesID: {
      type: [mongoose.Schema.Types.ObjectId],
    },
    // ownedResidencies: {
    //   type: [residencySchema], // Assuming Residency is another Mongoose schema
    // },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
