import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/v1',
  }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    // The mutation accepts a `Partial<Post>` arg, and returns a `Post`
    register: build.mutation({
        query:(body)=>({
            url:'/register',
            method:'POST',
            body,
            headers:{
                'Content-Type':'application/json'
            }
        })
    }),
    login:build.mutation({
        query:(body)=>({
            url:'/login',
            method:'POST',
            body,
            headers:{
                'Content-Type':'application/json'
            },
            credentials:'include',
        })
    }),
    logout:build.query({
         query:()=>({
          url:"/logout",
          credentials:"include"
         })
    }),
    forgotpassword:build.mutation({
      query:(body)=>({
        url:'/forgotpassword',
        method:'POST',
        body,
        headers:{
          'Content-Type':'application/json'
        }
      })
    }),
    resetpassword:build.mutation({
      query:({token,body})=>({
        url:`/resetpassword/${token}`,
        method:`POST`,
        body,
        headers:{
          'Content-Type':'application/json'
        }
      })
    })
  }),
})

export const {useLoginMutation,useRegisterMutation,useLazyLogoutQuery,useForgotpasswordMutation,useResetpasswordMutation}=userApi;