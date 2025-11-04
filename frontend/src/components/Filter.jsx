import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const Filter = () => {
    const navigate = useNavigate()
    const [category,setCategory] = useState("")
    console.log(category);
    
  return (
    <div>
        <div>
            <h1>Filter</h1>
            <label htmlFor="category">Category</label>
            <select name="" id="category" defaultValue="None">
                <option value="">Electronics</option>
                <option value="">Dress</option>
                <option value="">Accessories</option>
            </select>
        </div>
    </div>
  )
}

export default Filter