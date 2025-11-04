import { useState } from "react";
import { useLoginMutation } from "../redux/api/user"
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [login,{data,error,isloading}]=useLoginMutation();
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const navigate=useNavigate();
    const logged=async (e)=>{
        e.preventDefault();
        const result=await login({
            email,password
        })
        console.log(result);
        navigate("/");
    }
  return (
      <div className='text-center flex  justify-center items-center min-h-screen'>
          <div className='rounded-2xl w-96 h-96 p-10 shadow-gray-500 flex flex-col bg-sky-300'>
              <h1 className='text-4xl font-bold'>Login</h1>
              <div className='text-left my-6'>
                  <p className='text-2xl font-bold mb-2'>email</p>
                  <input className='w-70 p-1 border-2 mb-2 outline-0 border-sky-800' value={email} onChange={(e)=>{setemail(e.target.value)}} type="text" />
                  <p className='text-2xl font-bold mb-2'>password</p>
                  <input  className='w-70 p-1 border-2 mb-2 outline-0 border-sky-800 ' value={password} onChange={(e)=>{setpassword(e.target.value)}} type="text" />
              </div>
              <div className="">
                    <button onClick={logged} className='bg-sky-700  p-2 w-24 text-white font-bold text-2md mr-5'>Submit</button>
                    <Link to={'/forgotpassword'} className='bg-sky-700  p-2 w-24 text-white font-bold text-2md'>forgot password</Link>
              </div>
          </div>
      </div>
  )
}

export default Login