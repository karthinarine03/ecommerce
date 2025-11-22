import catchAsynError from "../Middlewares/catchAsynError.js";
import User from "../Model/User.js";
import sendtoken from "../Utils/sendtoken.js";
import sendmail from "../Utils/sendmail.js";
import crypt from 'crypto'
import { delete_file, upload_file } from "../Utils/cloudinary.js";
export const register=catchAsynError(async(req,res,next)=>{
        const {name,email,password}=req.body;
        if(!name || !email || !password){
             return next(new Error("fill all fields"))
        }
        const isalreadyexists=await User.findOne({email});
        if(isalreadyexists){
                return next (new Error("email already exists"));
        }
        const user=await User.create({name,email,password});
        
        sendtoken(user,201,res)
});

export const login=catchAsynError(async(req,res,next)=>{
        const {email,password}=req.body;
        const user=await User.findOne({email}).select("+password");
         if(!user){
                return next(new Error("email is not found"));
        }
        const ispasswordmatched=await user.comparepassword(password);
        if(!ispasswordmatched){
                return next(new Error("password not matched"));
        }
        sendtoken(user,201,res);
})

export const logout=catchAsynError(async(req,res,next)=>{

        res.cookie("token",null,{
                expires:new Date(Date()),
                httpOnly:true,
                secure:true
        }).status(201).json({
                message:"logged out"
        })
})

export const forgotpassword=catchAsynError(async(req,res,next)=>{
        const user=await User.findOne({email:req.body.email});

        if(!user){
                return next(new Error("email is not found"));
        }
        const resettoken=user.resetpasswordtoken();

        await user.save();

        const reseturl=`https://localhost:3000/api/v1/resetpassword/${resettoken}`;
        console.log(resettoken);
        
        await sendmail({
                email:user.email,
                subject:"password recovery",
                message:reseturl
        })

        res.status(200).json({
                message:"the resetpassword sucessfull",
                sucess:true,
                token:resettoken
        })

})


export const resetpassword=catchAsynError(async(req,res,next)=>{
        const resetpasswordtoken=crypt.createHash("sha256").update(req.params.token).digest("hex");

        const user=await User.findOne({
                resetPasswordToken:resetpasswordtoken,
                resetPassswordTokenExpires:{$gt:Date.now()}
        })
        if(req.body.password!=req.body.confirmpassword){
                return next(new Error("password not matched"));
        }

        user.password=req.body.password;
        user.resetPasswordToken=undefined;
        user.resetPassswordTokenExpires=undefined;

        await user.save();

        sendtoken(user,201,res);

})

export const getuserprofile=catchAsynError(async(req,res,next)=>{
        const user=await User.findById(req?.user?.id);
        if(!user){
               return next(new Error("user not exists"));
        }
        res.status(200).json({
                user
        })
})

export const updateuserprofile=catchAsynError(async(req,res,next)=>{
        const newprofile={
                name:req.body.name,
                email:req.body.email
        }
        const user=await User.findByIdAndUpdate(req?.user?.id,newprofile,{new:true});
        await user.save();
        res.status(200).json({
                user
        })
})

export const uploadavatar = catchAsynError(async (req, res, next) => {
  // Fetch the current user first
  const user = await User.findById(req.user._id);

  // If old avatar exists, delete it before uploading new one
  if (user.avatar?.public_id) {
    await delete_file(user.avatar.public_id);
  }

  // Upload new avatar
  const avatarResponse = await upload_file(req.body.avatar, "ecom/avatars");

  // Update user avatar
  user.avatar = avatarResponse;
  await user.save();

  res.status(200).json({
    success: true,
    message: "Avatar uploaded successfully",
    avatar: avatarResponse,
  });
});



