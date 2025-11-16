import catchAsynError from "../Middlewares/catchAsynError.js"
import Order from "../Model/Order.js";

export const placeOrder = catchAsynError(async(req,res,next)=>{
    const {orderItems,paymentMethod, paymentStatus , shippingAddress} = req.body;

    const data = await Order.create({
        user : "675c3a8d94fc82a128fbb546",
        shippingAddress,
        orderItems,
        paymentMethod,
        paymentStatus
    })

    res.status(200).json({
        data
    })

})