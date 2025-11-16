import  Stripe  from "stripe";
import catchAsyncError from "../Middlewares/catchAsynError.js";
import dotenv from "dotenv";
dotenv.config({ path: "../backend/Config/config.env" });

const stripe = Stripe(process.env.STRIPE_SECRETKEY);

export const checkoutStrip = catchAsyncError(async (req, res, next) => {
  const { orderItems } = req.body;

  const line_items = orderItems?.map((item) => {
    return {
      price_data: {
        currency: "aud",
        product_data: {
          name: item?.name,
          images: [item?.image],
          // metadata: { productId: item?.id },
        },
        unit_amount: item?.price * 1,
      },
      tax_rates: ["txr_1STvFEKHGFZk473oSo9WROxY"],
      quantity: item?.count,
    };
  });
  console.log("he");
  
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    success_url: "http://localhost:5173/payment/orders",
    cancel_url: "http://localhost:5173",
    line_items,
  });

  console.log(session);

  res.status(200).json({
    url: session.url,
  });
});
