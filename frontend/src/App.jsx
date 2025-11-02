import React from 'react'
import Home from './pages/Home'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import ProductDetail from './pages/ProductDetail'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/productDetail/:id' element={<ProductDetail/>} />

        </Routes>
      </Router>
      
    </div>
  )
}

export default App