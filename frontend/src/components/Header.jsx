import React from 'react'
import { Link } from 'react-router-dom'
import { useLogoutMutation } from '../redux/api/user'

const Header = () => {
   const [logout,{data,error,isLoading}]=useLogoutMutation();
  async function loggedout(){

    const result=await logout();
    console.log(result);
    
  }
  return (
    <div className='bg-orange-400'>
        <div className='flex justify-between p-3'>
            <img src="" alt="" />
            <div className='flex gap-4'>
                {/* <img src="" alt="" /> */}
                <Link to="/login" className='text-white font-semibold'>Login</Link>
                <Link to="/register" className='text-white font-semibold'>Register</Link>
                <button onClick={loggedout}className='text-white font-semibold'>logout</button>
            </div>
        </div>
    </div>
  )
}

export default Header