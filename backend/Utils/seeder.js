import Product from "../Model/Product.js"
import { demo } from "./sampleData.js"
const seeder = async()=>{

    try{
        const data = await Product.insertMany(demo)
        console.log("successfully seeded", data);
        
    }catch(error){
        console.log(error);
        
    }
    
    
}

export default seeder