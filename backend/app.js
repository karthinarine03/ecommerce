import express from 'express';
import { mongodb } from './Config/dbConnect.js';
import userRouter from './Router/User.js'
import errorHandling from './Middlewares/errorHandling.js';
import productRouter from './Router/Product.js'
import orderRouter from './Router/Order.js';
import paymentRouter from './Router/Payment.js'
import seeder from './Utils/seeder.js';
import cors from "cors"
import deleteData from './Utils/deleteData.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

const app = express();

// ✅ Middleware setup
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());
dotenv.config({path : '../backend/Config/config.env'})

console.log(process.env.PORT);

// ✅ Connect DB
mongodb();


// ✅ Global error handler
app.use("/api/v1",userRouter);
app.use('/api/v1',productRouter);
app.use('/api/v1',orderRouter);
app.use('/api/v1',paymentRouter);
app.use(errorHandling);

app.listen(3000, () => {
  console.log("Server running on port 3000 🚀");
});
