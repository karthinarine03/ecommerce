import { createSlice } from "@reduxjs/toolkit";
const data =JSON.parse(localStorage.getItem('cart'))
const totalQuantity = data.reduce((sum,item)=> sum+=item.count,0)
const initialState = {
    items: data,
    totalQuantity :totalQuantity,
}
const ProducSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        setItems : (state,action) =>{
            state.totalQuantity += action.payload.count
                 
            if(!localStorage.getItem('cart')){
                localStorage.setItem('cart',JSON.stringify([action.payload]))
                state.items = [action.payload]
                return;
            }
            state.items = [...state.items,action.payload]
            let exit =JSON.parse(localStorage.getItem('cart'))

            localStorage.setItem('cart',JSON.stringify([...exit,action.payload]))
            console.log(state.items);
            
        },

        setRemoveItems : (state,action)=>{
            const data = JSON.parse(localStorage.getItem('cart'))
            const newData = data.filter((r,index)=>index != action.payload)
            state.items = newData
            state.totalQuantity = newData.reduce((sum,item)=> sum+=item.count,0)
            localStorage.setItem('cart',JSON.stringify(newData))
            console.log(newData);
            
        }

    }
})

export default ProducSlice.reducer
export const {setItems,setRemoveItems} = ProducSlice.actions