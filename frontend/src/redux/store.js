import { configureStore } from '@reduxjs/toolkit'
import { productApi } from './api/product'
import { userApi } from './api/user'

export const store = configureStore({
  reducer: {
    [productApi.reducerPath] : productApi.reducer,
    [userApi.reducerPath] : userApi.reducer,
  },
  middleware : (getMiddleware) =>
    getMiddleware().concat(productApi.middleware,userApi.middleware),
})

