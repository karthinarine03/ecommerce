import React, { useState } from 'react'
import { useForgotpasswordMutation } from '../redux/api/user'
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [register,{data,error,isLoading}]=useForgotpasswordMutation();
    const [email,setemail]=useState("");
    const navigate=useNavigate();
    async function forgot(e){
        e.preventDefault();
        if(!email){
            console.log("enter the email");
            
        }
        const result=await register({email});
        navigate(`/resetpassword/${result.data.token}`)  
    }
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
        <div className='h-84 w-94 border-2 p-10'>
            <h1 className='text-3xl font-bold mb-10'>Forgot Password</h1>
            <div className='mb-10'>
                <p className='text-2xl mb-4'>email</p>
                <input className='outline-0 w-70 p-1 border-2' value={email} onChange={(e)=>{setemail(e.target.value)}} type="text" />
            </div>
            <button className='p-2 bg-sky-500 text-white font-bold rounded-md' onClick={forgot}>Reset Password</button>
        </div>
    </div>
  )
}

export default ForgotPassword