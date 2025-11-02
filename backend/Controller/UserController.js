import catchAsynError from "../Middlewares/catchAsynError.js";
import User from "../Model/User.js";
import sendtoken from "../Utils/sendtoken.js";


export const register=catchAsynError(async(req,res)=>{
        const {name,email,password}=req.body;
        const user=await User.create({name,email,password});
        
        sendtoken(user,201,res)
});

export const login=catchAsynError(async(req,res)=>{
        const {email,password}=req.body;
        const user=await User.findOne({email}).select("+password");
        if(!user) return next(new Error("Register before login"))
        const ispasswordmatched=await user.comparepasword(password);
        sendtoken(user,201,res);
})

export const logout=catchAsynError(async(req,res)=>{

        res.cookie("token",null,{
                expires:new Date(Date()),
                httpOnly:true
        })
        res.status(201).json({
                message:"logged out"
        })
})
