import React, { useState } from 'react'
import { useResetpasswordMutation } from '../redux/api/user';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const ResetPassword = () => {
    const [resetpassword,{data,error,isLoading}]=useResetpasswordMutation();
    const [password,setpassword]=useState("");
    const [confirmpassword,setconfirmpassword]=useState("");
    const {token}=useParams();
    const navigate=useNavigate();
    async function reset(e){
        e.preventDefault();
        try{
            const result=await resetpassword({token,body:{password,confirmpassword}});
            navigate("/login");
            toast.success("password reseted sucessfully")
        }
        catch(err){
            if(err){
                toast.error(err.data.message)
            }
        }
    }
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
        <div className='bg-orange-400 rounded-2xl w-94 p-10'>
            <h1 className='text-4xl text-center font-bold mb-7'>Reset Password</h1>
            <div className='mb-4'>
                <p className='text-2xl font-bold mb-4'>Password</p>
                <input className='outline-0 w-70 p-1 mb-3 bg-amber-50 rounded-md' value={password} onChange={(e)=>{setpassword(e.target.value)}} type="text" />
                <p className='text-2xl font-bold mb-4'>confirm password</p>
                <input className='outline-0 w-70 p-1 bg-amber-50 rounded-md mb-3' value={confirmpassword} onChange={(e)=>{setconfirmpassword(e.target.value)}} type="text" />
            </div>
            <button className='p-2 bg-black text-white font-bold rounded-md' onClick={reset} >Reset Password</button>
        </div>
    </div>
  )
}

export default ResetPassword;