import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header'

const Cart = () => {
    const {items} = useSelector((state)=> state.cart)
    console.log(items);

    
  return (
    <div>
      <Header/>
      <div className=''>
        {
          items?.map((item,index)=>(
            <div key={index} className='flex'>
              <img src={`${item.image}`} width={'200px'} alt="" />
              <div className='my-4'>
                <h1>{item?.name}</h1>
                <h2>₹{item?.price}</h2>
                <h2>Count : {item?.count}</h2>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart