import { configureStore } from "@reduxjs/toolkit";
import favReducer from "../features/favSlice";

export const store = configureStore({
    reducer:{
        fav: favReducer
    }
})