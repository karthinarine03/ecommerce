import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypt from "crypto";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true   
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    avatar:{
        public_id:String,
        url:String
    },
    role:{
        type:String,
        default:"user"
    },
    resetPasswordToken:String,
    resetPassswordTokenExpires:Date,
});

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password=await bcrypt.hash(this.password,10);
})

userSchema.methods.comparepassword=async function(enteredpassword){
    return await bcrypt.compare(enteredpassword,this.password);
}

userSchema.methods.getjwttoken=function(){
    return jwt.sign(
        {id:this.id},
        "mysecret",
        {expiresIn:"7d"}
    )
}

userSchema.methods.resetpasswordtoken=function(){
    const resettoken=crypt.randomBytes(20).toString("hex");
    this.resetPasswordToken=crypt.createHash("sha256").update(resettoken).digest("hex");
    this.resetPassswordTokenExpires=Date.now()+30*60*1000;
    return resettoken;
}

const User=mongoose.model("User",userSchema);
export default User;
