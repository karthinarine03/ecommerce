import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (queryParams) => {
          if (queryParams) return {
            url: `/allProducts?category=${queryParams.category}`
          }
        return {
          url : `/allProducts`}
      },
    }),
    getProductsById : builder.query({
      query : (params)=> `/product/${params}`
    })
  }),
})


export const {useGetAllProductsQuery , useGetProductsByIdQuery} =productApi