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

const app=express();
app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))

dotenv.config({path : '../backend/Config/config.env'})

console.log(process.env.PORT);

mongodb();

//seeding the data 
// seeder()

//removal of data
// deleteData()
app.use(cookieParser());

app.use("/api/v1",userRouter);
app.use('/api/v1',productRouter);
app.use('/api/v1',orderRouter);
app.use('/api/v1',paymentRouter);
app.use(errorHandling);



app.listen(3000,()=>{
    console.log("running in 3000");
    
})
