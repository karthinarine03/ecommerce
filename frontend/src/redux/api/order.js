import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1" }),
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: (body) => ({
        url: "/placeOrder",
        method: "post",
        body,
      }),
    }),
    stripePay: builder.mutation({
      query: (body) => ({
        url: "/placeOrder/payment",
        method: "post",
        body,
      }),
    }),
  }),
});

export const { usePlaceOrderMutation, useStripePayMutation } = orderApi;
