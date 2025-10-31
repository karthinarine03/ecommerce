import express from 'express';
import { mongodb } from './Config/dbConnect.js';
import userRouter from './Router/User.js'
import errorHandling from './Middlewares/errorHandling.js';
import productRouter from './Router/Product.js'
import seeder from './Utils/seeder.js';

const app=express();
app.use(express.json());


mongodb();

//seeding the data 
// seeder()


app.use("/api/v1",userRouter);
app.use('/api/v1',productRouter)
app.use(errorHandling);



app.listen(3000,()=>{
    console.log("running in 3000");
    
})
