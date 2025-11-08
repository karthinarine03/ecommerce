import { useState } from "react";
import { useLoginMutation } from "../redux/api/user"
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
    const [login,{data,error,isloading}]=useLoginMutation();
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const navigate=useNavigate();
    const logged=async (e)=>{
        e.preventDefault();
        try{
            const result=await login({
            email,password
        }).unwrap();
        toast.success("login sucessfull")
        navigate("/");
        }
        catch(err){
            if(err){
                toast.error(err.data.message);
            }
        }
        
    }
  return (
      <div className='text-center flex  justify-center items-center min-h-screen'>
          <div className='rounded-2xl w-96 h-96 p-10 shadow-gray-500 flex flex-col bg-orange-400'>
              <h1 className='text-4xl font-bold'>Login</h1>
              <div className='text-left my-6'>
                  <p className='text-2xl font-bold mb-2'>Email</p>
                  <input className='w-70 p-1 border-2 mb-2 outline-0 border-orange-200 bg-amber-50 rounded-md' value={email} onChange={(e)=>{setemail(e.target.value)}} type="text" />
                  <p className='text-2xl font-bold mb-2'>Password</p>
                  <input  className='w-70 p-1 border-2 mb-2 outline-0 border-orange-200 bg-amber-50 rounded-md' value={password} onChange={(e)=>{setpassword(e.target.value)}} type="text" />
              </div>
              <div className="p-0 text-left">
                    <button onClick={logged} className='bg-black  p-3 w-24 text-white font-bold text-2md mr-5 ml-0 rounded-md'>Submit</button>
                    <Link to={'/forgotpassword'} className='bg-black p-3 w-24 text-white font-bold text-2md rounded-md'>forgot password</Link>
              </div>
          </div>
      </div>
  )
}

export default Login