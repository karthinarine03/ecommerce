import React, { useCallback, useState } from 'react'
import { useGetAllProductsQuery } from '../redux/api/product'
import ProductCard from './ProductCard';
import Filter from './Filter';

const Products = () => {

    const [filter,setFilter] = useState({
      category : "",
      min : 0,
      max : 0
    })
    const {data,error,isLoading} = useGetAllProductsQuery(filter);

    const defineFilter = useCallback((newFilter)=>{
      setFilter(newFilter)
    },[])

  return (
    <div className=''>
      <h1 className='text-4xl font-bold my-2'>Top Related Products</h1>
        <div>
          <Filter addFilter={defineFilter}/>
        </div>
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