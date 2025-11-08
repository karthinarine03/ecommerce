import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (queryParams) =>({
        url : `/allProducts`,
        params : {
          category : queryParams?.category,
          min : queryParams?.min,
          max : queryParams?.max
        },
        credentials:"include"
      })
    }),
    getProductsById : builder.query({
      query : (params)=> `/product/${params}`,
    
    }),
    addReview : builder.mutation({
      query : (body)=>({
        url : '/product/review/add',
        method : 'post',
        body,
        credentials:"include"
      })
    })
  }),
})


export const {useGetAllProductsQuery , useGetProductsByIdQuery , useAddReviewMutation} =productApi