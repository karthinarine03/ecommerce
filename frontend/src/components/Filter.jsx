import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const Filter = ({clearFilter,addFilter}) => {
    const navigate = useNavigate()
    const [category,setCategory] = useState("")
    const [filter,setFilter] = useState({
      category : "",
      min : 0,
      max : 0
    })
    console.log(filter);
    function handleClear(){
      setFilter({
        category : "",
        min : 0,
        max : 0
      })
      clearFilter()
    }



  return (
    <div>
        <div className='px-4'>
            <h1 className='font-bold text-2xl'>Filter</h1>
            <div className='flex flex-col gap-2 my-3'>
              <label htmlFor="category" className='font-semibold '>Category</label>
              <select name="" id="category" className='border ' value={filter?.category} onChange={(e)=>setFilter({...filter,category: e.target.value}) }>
                  <option value="" >None</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Dress">Dress</option>
                  <option value="Accessories">Accessories</option>
              </select>
            </div>
            <label htmlFor="min" className='font-semibold '>Min</label>
            <input type="text" name="" id="min" placeholder='Minimum price' value={ filter.min ? filter?.min : ''}className='border mb-2 px-1' onChange={(e)=>setFilter({...filter, min: e.target.value}) } />
            <label htmlFor="max" className='font-semibold '>Max</label>
            <input type="text" name="" id="max" placeholder='Maximum price' value={ filter.max ? filter?.max : ''} className='border px-1' onChange={(e)=>setFilter({...filter, max: e.target.value}) } />
     
            <button onClick={()=> addFilter(filter)} className='bg-orange-300 w-full my-3 py-1 rounded-md'>Apply Filter</button>
            <button onClick={handleClear} className='bg-orange-300 w-full  py-1 rounded-md'>Clear Filters</button>

        </div>
    </div>
  )
}

export default Filter