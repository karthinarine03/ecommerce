import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const {items} = useSelector((state)=> state.cart)
    console.log(items);
    
  return (
    <div>

    </div>
  )
}

export default Cart