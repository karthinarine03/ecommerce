import catchAsynError from "../Middlewares/catchAsynError.js";
import Product from "../Model/Product.js";

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
    console.log(req.params.id);
    
    
    const data = await Product.findById(req.params.id)

    res.status(200).json({
        success : true,
        count : data?.length,
        data 
    })
})