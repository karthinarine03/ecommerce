import catchAsynError from "../Middlewares/catchAsynError.js";


export const getUser=catchAsynError(async(req,res)=>{
        res.send("hi aaya");
})