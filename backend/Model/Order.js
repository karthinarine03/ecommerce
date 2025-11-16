import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
    user :{
        type : mongoose.Schema.Types.ObjectId,
        required : true
    } ,
    orderItems : [
        {
            name : String,
            count : Number,
            price : Number,
            image : String

        }
    ],
    shippingAddress : {
        address : String,
        city : String,
        state : String,
        pincode : String,

    },
    paymentMethod : {
        type : String,
        enum : ["COD","UPIPay","cash"]
    },
    paymentStatus : {
        type : String ,
        enum  : ["Pending", "Failed", "Success"]
    },
    totalPrice : {
        type : String,
    }

},{timestamps :true})

export default mongoose.model("Order", orderSchema)