import catchAsynError from "../Middlewares/catchAsynError.js";
import Product from "../Model/Product.js";
import User from '../Model/User.js'

//getting all prouct
//@/allProudcts
export const getAllProduct = catchAsynError(async(req,res,next)=>{

    const query ={}    
    // filter based on category

    if(req.query.category){
        query.category = req.query.category
    }

    // based of price
    if(req.query.min || req.query.max){
        let max = Number(req.query.max) || Infinity
        let min = Number(req.query.min) || 0
        query.price = {$gte : min , $lte : max}
              
    } 
    
    const data = await Product.find(query);

    res.status(200).json({
        success : true,
        count : data?.length,
        data 
    })
})

//product by id
//@ /product/:id

export const getProduct = catchAsynError(async(req,res,next)=>{
  
    const data = await Product.findById(req.params.id)

    res.status(200).json({
        success : true,
        count : data?.length,
        data 
    })
})

//Review posting
//@ /product/review/add

export const addReview = catchAsynError(async(req,res,next)=>{
    
    const userId =  await req?.user?._id.valueOf();
   
    
    // const userId = "6902b718e1146e3d0a1219f6";

    // if(!userId) return next (new Error("login Before Reviewing"));

    // const user =await User.findById(userId)

    // if(!user) return next(new Error("Not a vaild user"));

    const {rating,comment,productId} = req.body;

    if( !rating || !comment || !productId) return next(new Error("you must give both Rating and Comment"));

    const product = await Product.findById(productId)

    if(!product) return next(new Error("product is not vaild"));

    const review ={
        user : userId,
        rating : Number(rating),
        comment
    }

    const isReviewed = await product?.reviews.find(
        (r)=>r.user == userId)
    
    if(isReviewed){
        await product.reviews.forEach((review)=>{
            if(review.user == userId){
                review.rating = Number(rating)
                review.comment = comment
            }
        })
    }else{
        await product.reviews.push(review)
    }

    product.ratings =product?.reviews?.reduce((acc,curr)=> acc+ curr?.rating ,0) / product?.reviews.length
    
    await product.save()

    res.status(200).json({
     product
    })

})