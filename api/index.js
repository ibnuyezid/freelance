import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({ origin: "https://freelance-gig.netlify.app", credentials: true })
);
const connect = async () => {
  try {
    await mongoose.connect(process.env.Mongo_Url);
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error);
  }
};

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMsg = err.message || "Something went wrong";
  return res.status(errorStatus).send(errorMsg);
});

app.listen(8800, () => {
  connect();
  console.log("Backend server is running");
});
