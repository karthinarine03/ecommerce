import { createSlice } from "@reduxjs/toolkit";
const data =JSON.parse(localStorage.getItem('cart'))
const initialState = {
    items: data,
    totalQuantity :data.length,
}
const ProducSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        setItems : (state,action) =>{
            state.totalQuantity += action.payload.count
                 
            if(!localStorage.getItem('cart')) return localStorage.setItem('cart',JSON.stringify([action.payload]))

            let exit =JSON.parse(localStorage.getItem('cart'))

            localStorage.setItem('cart',JSON.stringify([...exit,action.payload]))
            console.log(state.items);
            
        },

        setRemoveItems : (state,action)=>{

        }

    }
})

export default ProducSlice.reducer
export const {setItems,setRemoveItems} = ProducSlice.actions