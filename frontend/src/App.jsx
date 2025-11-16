import React from 'react'
import Home from './pages/Home'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import ProductDetail from './pages/ProductDetail'
import Login from './components/Login'
import Register from './components/Register'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'
import Cart from './pages/Cart'
import OrderPay from './pages/OrderPay'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/productDetail/:id' element={<ProductDetail/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/forgotpassword' element={<ForgotPassword/>}/>
          <Route path='/resetpassword/:token' element={<ResetPassword/>}/>
          <Route path='/mycart' element={<Cart/>}/>
          <Route path='/placeOrder' element={<OrderPay/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App