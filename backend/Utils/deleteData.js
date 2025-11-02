import Product from "../Model/Product.js"
export default async()=>{

    try{
        await Product.deleteMany()
        console.log('Successfully removed');
        
    }catch(e){
        console.log(e);
        
    }
}