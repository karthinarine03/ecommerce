import React, { useState } from 'react'
import { useResetpasswordMutation } from '../redux/api/user';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
    const [resetpassword,{data,error,isLoading}]=useResetpasswordMutation();
    const [password,setpassword]=useState("");
    const [confirmpassword,setconfirmpassword]=useState("");
    const {token}=useParams();
    const navigate=useNavigate();
    async function reset(e){
        e.preventDefault();
        if(!password||!confirmpassword){
            console.log("password not matched ");    
        }
        const result=await resetpassword({token,body:{password,confirmpassword}});
        console.log(result);
        navigate("/login");
    }
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
        <div className='h-84 w-94 border-2 p-10'>
            <h1 className='text-3xl font-bold mb-3'>Reset Password</h1>
            <div className='mb-4'>
                <p className='text-1xl mb-4'>password</p>
                <input className='outline-0 w-70 p-1 border-2' value={password} onChange={(e)=>{setpassword(e.target.value)}} type="text" />
                <p className='text-1xl mb-4'>confirm password</p>
                <input className='outline-0 w-70 p-1 border-2' value={confirmpassword} onChange={(e)=>{setconfirmpassword(e.target.value)}} type="text" />
            </div>
            <button className='p-2 bg-sky-500 text-white font-bold rounded-md' onClick={reset} >Reset Password</button>
        </div>
    </div>
  )
}

export default ResetPassword;