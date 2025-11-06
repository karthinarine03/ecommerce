import React from 'react'
import Header from '../components/Header'
import Products from '../components/Products'
import { useDispatch, useSelector } from 'react-redux'
import { setItems } from '../redux/features/product'

const Home = () => {

  return (
    <div>
        <Header/>
        <Products/>
    </div>
  )
}

export default Home