import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore = configureStore({
    //this whole big reducer is the app reducer and this reducer contains small reducer
    reducer:{
        cart : cartReducer,
    },
})

export default appStore