import React from 'react'

const Header = () => {
  return (
    <div className='bg-orange-400'>
        <div className='flex justify-between p-3'>
            <img src="" alt="" />
            <div className='flex gap-4'>
                {/* <img src="" alt="" /> */}
                <a href="" className='text-white font-semibold'>Login</a>
                <a href="" className='text-white font-semibold'>Register</a>
            </div>
        </div>
    </div>
  )
}

export default Header