import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null
    },
    reducers: {
        addPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideos: (state, action) => {
            state.trailerVideo = action.payload
        }
    }
})

export const { addPlayingMovies, addTrailerVideos } = moviesSlice.actions;

export default moviesSlice.reducer;