import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity : 0,
    totalPrice : 0
}
const ProducSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        setItems : (state,action) =>{
            state.totalQuantity += action.payload.count
            state.totalPrice += action.payload.price
            state.items.push(action.payload)
            localStorage.setItem('cart',JSON.stringify(action.payload))
            console.log(action.payload);
            
        },

        setRemoveItems : (state,action)=>{

        }

    }
})

export default ProducSlice.reducer
export const {setItems,setRemoveItems} = ProducSlice.actions