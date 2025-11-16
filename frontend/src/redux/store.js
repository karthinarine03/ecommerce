import { configureStore } from '@reduxjs/toolkit'
import { productApi } from './api/product'
import { userApi } from './api/user'
import productSlice from './features/product'
import { orderApi } from './api/order'

export const store = configureStore({
  reducer: {
    cart : productSlice,
    [productApi.reducerPath] : productApi.reducer,
    [userApi.reducerPath] : userApi.reducer,
    [orderApi.reducerPath] : orderApi.reducer,
  },
  middleware : (getMiddleware) =>
    getMiddleware().concat(productApi.middleware,userApi.middleware,orderApi.middleware),
})

