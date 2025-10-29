import express from 'express';
import { mongodb } from './Config/dbConnect.js';
import userRouter from './Router/User.js'
const app=express();
app.use(express.json());
mongodb();
app.use("/api/v1",userRouter);
app.listen(3000,()=>{
    console.log("running in 3000");
    
})
