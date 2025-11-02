import React from 'react'
import { useGetAllProductsQuery } from '../redux/api/product'
import ProductCard from './ProductCard';

const Products = () => {

    const {data,error,isLoading} = useGetAllProductsQuery();
  return (
    <div className=''>
      <h1 className='text-4xl font-bold my-2'>Top Related Products</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 '>
        {data?.data.map((item,key)=>(
          <a href={`productDetail/${item?._id}`}>
            <div className='' key={key}>
            <ProductCard item={item}/>
            </div>
          </a>
        ))}
        </div>
    </div>

    
  )
}

export default Products