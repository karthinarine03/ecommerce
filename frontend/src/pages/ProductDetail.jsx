import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { useGetProductsByIdQuery } from '../redux/api/product'

const ProductDetail = () => {
    const {id} = useParams() 
    const {data ,error,isLoading} = useGetProductsByIdQuery(id);
    console.log(data);
      
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail