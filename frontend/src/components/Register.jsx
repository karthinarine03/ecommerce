import React, { useState } from 'react'
import { useRegisterMutation } from '../redux/api/user'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';

const Register = () => {
    const [Register,{data,error,isLoading}]=useRegisterMutation();
    const [email,setemail]=useState("");
    const [name,setname]=useState("");
    const [password,setpassword]=useState("");
    const navigate=useNavigate();
    async function registered(e){
      e.preventDefault();
      try{
        const result=await Register({name,email,password}).unwrap();
        toast.success("register sucessfull");
        navigate("/login");
      }
      catch(err){
          if(err){
            toast.error(err.data.message);
          }
      }
    }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <div className='w-94  p-10 bg-orange-400 rounded-2xl'>
              <h1 className='text-4xl font-bold mb-4 mt-0 pt-0 text-center'>Register</h1>
              <div className='flex flex-col mb-4'>
                <p className='text-2xl font-bold mb-2'>Name</p>
                <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} className='outline-0 rounded-md w-70 p-1 mb-2 bg-amber-50' />
                <p className='text-2xl font-bold mb-2'>Email</p>
                <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} className='outline-0 rounded-md bg-amber-50 w-70 p-1 mb-2' />
                <p className='text-2xl font-bold mb-2'>password</p>
                <input type="text" value={password} onChange={(e)=>{setpassword(e.target.value)}} className='outline-0 rounded-md bg-amber-50 w-70 p-1 mb-2' />
              </div>
              <button className='p-3 bg-black text-white font-bold rounded-md' onClick={registered}>Register</button>
        </div>

    </div>
  )
}

export default Register