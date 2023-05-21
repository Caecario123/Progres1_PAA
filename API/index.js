import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import hotelRoute from "./routes/hotel.js";
import roomRoute from "./routes/room.js";
const app = express();
dotenv.config();

const connect = async ()=>{
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Terhubung ke mongoDB.")
  } catch (error) {
    throw error
  }
};

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected")
});

app.use(express.json())

app.use("/API/auth", authRoute);
app.use("/API/user", userRoute);
app.use("/API/hotel", hotelRoute);
app.use("/API/room", roomRoute);

app.use((err,req,res,next)=>{
  const errorStatus = err.status || 500
  const errorMessage = err.message || "something went wrong"
  return res.status(errorStatus).json({
    success:false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  })
});

app.listen(8800, ()=>{
    connect()
    console.log("Backend terhubung")
});