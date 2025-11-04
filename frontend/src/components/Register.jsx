import React, { useState } from 'react'
import { useRegisterMutation } from '../redux/api/user'
import { useNavigate } from 'react-router-dom';



const Register = () => {
    const [Register,{data,error,isLoading}]=useRegisterMutation();
    const [email,setemail]=useState("");
    const [name,setname]=useState("");
    const [password,setpassword]=useState("");
    const navigate=useNavigate();
    async function registered(e){
      e.preventDefault();
      if(!email||!password||!name){
        console.log("please enter all field");
      }
      const result=await Register({name,email,password});
      console.log(result);
      navigate("/login")
    }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <div className='border-2 w-94 h-94 p-10'>
              <h1 className='text-3xl font-bold mb-2'>Register</h1>
              <div className='flex flex-col mb-4'>
                <p>Name</p>
                <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} className='outline-0 border-2 w-70 p-1 mb-2' />
                <p>Email</p>
                <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} className='outline-0 border-2 w-70 p-1 mb-2' />
                <p>password</p>
                <input type="text" value={password} onChange={(e)=>{setpassword(e.target.value)}} className='outline-0 border-2 w-70 p-1 mb-2' />
              </div>
              <button className='p-2 bg-sky-500 text-white font-bold rounded-md' onClick={registered}>Submit</button>
        </div>

    </div>
  )
}

export default Register