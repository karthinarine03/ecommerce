import React, { useState, useMemo } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { useGetProductsByIdQuery } from '../redux/api/product'
import Header from '../components/Header'
import ProductInfo from '../components/ProductInfo'
import Review from '../components/Review'

const ProductDetail = () => {
    const {id} = useParams() 
    const {data ,error,isLoading} = useGetProductsByIdQuery(id);
    
    console.log(data?.data);
      
  return (
    <div>
      <Header/>
      <ProductInfo product ={data?.data}/>
      <hr />
      <Review reviews = {data?.data}/>

    </div>
  )
}

export default ProductDetail