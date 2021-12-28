import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    filteredMovies:[],
    value: "",
    selection: "popular",
    url: "https://api.themoviedb.org/3/movie/popular?api_key=d6441bcd0c7210bd6baec2676da16bd1",
    selectedMovie: null
}

function getIndex(fav, arr){
    return arr.findIndex(item => item.id == fav.id)
}

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers:{
        getMovies:(state, action) =>{
            state.movies = action.payload
            state.filteredMovies = action.payload
        },
        setUrl:(state,action) =>{
            state.url =action.payload
        },
        setSelection:(state, action) =>{
            state.selection = action.payload
        },
        filterMovie:(state, action) =>{
            state.value = action.payload
            let filteredMovies = [...state.movies]
            if(action.payload){
                filteredMovies = filteredMovies.filter(item=>{
                    return(
                        item.title.toLowerCase().indexOf(action.payload.toLowerCase()) >-1
                    )
                })
            }
            state.filteredMovies = filteredMovies;
        },

    },
    
})

export const {getMovies, setUrl,setSelection,filterMovie} = movieSlice.actions
export default movieSlice.reducer;