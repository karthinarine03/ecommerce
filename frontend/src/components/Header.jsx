import React from 'react'
import { Link } from 'react-router-dom'
import { useLazyLogoutQuery, useLoginMutation, useUserprofileQuery,  } from '../redux/api/user'

const Header = () => {
  const [logout]=useLazyLogoutQuery();
  const {data,error,isLoading}=useUserprofileQuery();
   console.log(data);
   
  async function loggedout(){

    const result=await logout();

    
  }
  return (
    <div className='bg-orange-400'>
        <div className='flex justify-between p-3'>
            <h1 className='text-2xl text-white font-bold'>EComz</h1>
            <div className='flex gap-4'>
                {/* <img src="" alt="" /> */}
                  {data?
                  <button onClick={loggedout}className='text-white font-semibold'>logout</button>:
                  <Link to="/login" className='text-white font-semibold'>Login</Link>
                  }
              
                <Link to="/register" className='text-white font-semibold'>Register</Link>
            </div>
        </div>
    </div>
  )
}

export default Header