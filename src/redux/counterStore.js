import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";




    const counterstore = configureStore({
        reducer:{
            counterReducer:counterSlice
        }
    })

    export default counterstore;
