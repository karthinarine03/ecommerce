import User from "../Model/User.js";
import catchAsynError from "./catchAsynError.js";
import jwt from 'jsonwebtoken'
export const isauthenticated=catchAsynError(async(req,res,next)=>{
    const {token}=req.cookies;
    if(!token){
        return next(new Error("login first"));
    }
    const decoded=jwt.verify(token,"mysecret");
    req.user=await User.findById(decoded.id);
    next();
})