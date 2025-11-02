import { configureStore } from '@reduxjs/toolkit'
import { productApi } from './api/product'

export const store = configureStore({
  reducer: {
    [productApi.reducerPath] : productApi.reducer,
  },
  middleware : (getMiddleware) =>
    getMiddleware().concat(productApi.middleware),
})