import { configureStore } from "@reduxjs/toolkit";
import  productReducer  from "./productManage";

export default configureStore({
    reducer:{
        product: productReducer,
    },
})