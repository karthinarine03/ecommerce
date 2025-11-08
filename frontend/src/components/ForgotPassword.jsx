import React, { useState } from 'react'
import { useForgotpasswordMutation } from '../redux/api/user'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
    const [register,{data,error,isLoading}]=useForgotpasswordMutation();
    const [email,setemail]=useState("");
    const navigate=useNavigate();
    async function forgot(e){
        e.preventDefault();
        if (!email) {
            toast.error("enter the email")
        }
        else {
            try {
                const result = await register({ email }).unwrap();
                console.log(result);
                
                toast.success("email verified");
                navigate(`/resetpassword/${result.token}`)
            }
            catch (err) {
                if (err) {
                    console.log(error);
                    
                    toast.error(err?.data?.message);
                }
            }
        }
    }
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
        <div className=' w-94 rounded-2xl bg-orange-400 p-10'>
            <h1 className='text-3xl font-bold mb-10'>Forgot Password</h1>
            <div className='mb-7'>
                <p className='text-2xl mb-4 font-bold'>Email</p>
                <input className='outline-0 w-70 p-1 bg-amber-50 rounded-md' value={email} onChange={(e)=>{setemail(e.target.value)}} type="text" />
            </div>
            <button className='p-2 bg-black text-white font-bold rounded-md' onClick={forgot}>Reset Password</button>
        </div>
    </div>
  )
}

export default ForgotPassword