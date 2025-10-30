import mongoose from "mongoose";

const productSchema = mongoose.Schema({

    name : {
        type : String,
        required : [true,"Enter the product name"],
        maxLength : [50,"Name not exceed 50 character"]
    },
    price : {
        type : Number,
        required : [true,"Enter the product price"],
        min : 10
    },
    category : {
        type : String,
        enum : ["Electronics" ,"Dress","Accessories","Books"],
        required : [true,"Mention the category"]
    },
    stock : {
        type : Number,
        default : 0,
    },
    review : {

    },
    images : [{
        publicId : String,
        url : String
    }]
    },{timestamps : true})

    export default mongoose.model("Product",productSchema);
