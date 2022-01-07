import { createSlice } from "@reduxjs/toolkit";

export const product = createSlice({
    name:'product',
    initialState:{
        products: [],
       
    },
    reducers:{
        addProduct: (state,action) =>{
            if(state.products.includes(action.payload)){
                const newProducts = state.products.filter(item => item !== action.payload);
                state.products = [...newProducts]
            }else{
                state.products = [...state.products, action.payload]
            }
           
            console.log(state.products);
        },
    }
})

export const {addProduct} = product.actions
export default product.reducer