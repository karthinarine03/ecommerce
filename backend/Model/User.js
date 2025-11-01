import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true   
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password=await bcrypt.hash(this.password,10);
})

userSchema.methods.comparepasword=async function(enteredpassword){
    return await bcrypt.compare(enteredpassword,this.password);
}

userSchema.methods.getjwttoken=function(){
    return jwt.sign(
        {id:this.id},
        "mysecret",
        {expiresIn:"7d"}
    )
}

const User=mongoose.model("User",userSchema);
export default User;
