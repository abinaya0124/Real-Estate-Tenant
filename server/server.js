import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import { userRoute } from "./routes/userRoutes.js";
import { residencyRoute } from "./routes/residenyRoutes.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();

// const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connection Successfull");
  } catch (error) {
    console.log(error);
  }
};

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Server is running on port ${process.env.PORT}`);
});

app.use("/api/user", userRoute);
app.use("/api/residency", residencyRoute);
