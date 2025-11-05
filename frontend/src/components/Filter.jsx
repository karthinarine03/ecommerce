import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const Filter = ({addFilter}) => {
    const navigate = useNavigate()
    const [category,setCategory] = useState("")
    const [filter,setFilter] = useState({
      category : "",
      min : 0,
      max : 0
    })
    console.log(filter);
    function handleFilter(){
      addFilter(filter)
    }


  return (
    <div>
        <div>
            <h1>Filter</h1>
            <label htmlFor="category">Category</label>
            <select name="" id="category" value={category} onChange={(e)=>setFilter({...filter,category: e.target.value}) }>
                <option value="" selected>None</option>
                <option value="Electronics">Electronics</option>
                <option value="Dress">Dress</option>
                <option value="Accessories">Accessories</option>
            </select>
            <label htmlFor="min">Min</label>
            <input type="text" name="" id="min" placeholder='Minimum price'onChange={(e)=>setFilter({...filter, min: e.target.value}) } />
            <label htmlFor="max">Min</label>
            <input type="text" name="" id="max" placeholder='Maximum price' onChange={(e)=>setFilter({...filter, max: e.target.value}) } />
            <button onClick={handleFilter}>Apply Filter</button>
        </div>
    </div>
  )
}

export default Filter