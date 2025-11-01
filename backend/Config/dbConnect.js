import mongoose from "mongoose";

export const mongodb=async()=>{
    await mongoose.connect("mongodb+srv://karthinarine03:Karthi12@ecommerce.fopjd.mongodb.net/ecommerce")
    .then((con)=>{
        console.log(con.connection.host);
    })
}
