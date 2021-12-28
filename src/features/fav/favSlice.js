import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favs: []
}

function getIndex(fav, arr){
    return arr.findIndex(item => item.id == fav.id)
}

export const favSlice = createSlice({
    name: "fav",
    initialState,
    reducers:{
        addFav:(state, action) =>{
            state.favs = [...state.favs, action.payload]
        },
        deleteFav:(state,action) =>{
            state.favs.splice(getIndex(action.payload, state.favs), 1)
        }
    },
    
})

export const {addFav, deleteFav} = favSlice.actions
export default favSlice.reducer;