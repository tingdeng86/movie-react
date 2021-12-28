import { configureStore } from "@reduxjs/toolkit";
import favReducer from "../features/fav/favSlice";

export const store = configureStore({
    reducer:{
        fav: favReducer
    }
})