import { Stripe } from "stripe";
import catchAsyncError from "../Middlewares/catchAsynError.js";

const stripe = Stripe(process.env.STRIPE_SECRETKEY);

export const checkoutStrip = catchAsyncError(async (req, res, next) => {

    const {orderItems} = req.body

    const line_items = orderItems.map((item)=>{
        return {
            price_data : {
                currency : "aus",
                product_data : {
                    name : item?.name,
                    images : item?.image,
                    metadata : { productId : item?.id}
                },
                unit_amount : item?.price *10
            },
            tax_rates: ['txr_1STvFEKHGFZk473oSo9WROxY'],
            quantity : item?.quantity
        }
    })
  const session = await stripe.checkout.session.create({
    mode: "payment",
    payment_method_types: ["card"],
    success_url: "http://localhost:5173/payment/orders",
    cancle_url: "http://localhost:5173/payment/orders",
    line_items

  });

  console.log(session);

  res.status(200).json({
    url : session.url
  })
  
});
