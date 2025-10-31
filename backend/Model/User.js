import mongoose from "mongoose";

const userSchema = mongoose.Schema({

},{timeStamps:true})

export default mongoose.model("User",userSchema)

