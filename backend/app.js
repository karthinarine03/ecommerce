import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { mongodb } from "./Config/dbConnect.js";
import userRouter from "./Router/User.js";
import productRouter from "./Router/Product.js";
import errorHandling from "./Middlewares/errorHandling.js";

const app = express();

// ✅ Middleware setup
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());

// ✅ Connect DB
mongodb();

// ✅ Routes
app.use("/api/v1", userRouter);
app.use("/api/v1", productRouter);

// ✅ Global error handler
app.use(errorHandling);

app.listen(3000, () => {
  console.log("Server running on port 3000 🚀");
});
