import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../services";


const initialState = {
    movies: [],
    status: null,
    error: null,
    movie: null,
    currentPage: 1,
    page: null,
    // total_pages: 0,


}
export const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async ({currentPage}, {rejectedWithValue}) => {
        try {
            return await moviesService.getAll(currentPage)
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);


export const getMovieById = createAsyncThunk(
    'moviesSlice/getMovieById',
    async ({id}, {rejectedWithValue}) => {
        try {
            return await moviesService.getById({id})

        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllMovies.pending]: (state) => {
            state.status = 'pending'
        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
            state.currentPage = action.payload.currentPage
            state.page = action.payload.page
            // state.total_pages = action.payload.total_pages
        },
        [getAllMovies.rejected]: (state, action) => {
            state.error = action.payload
        },
        [getMovieById.pending]: (state) => {
            state.status = 'pending!'

        },
        [getMovieById.fulfilled]: (state, action) => {
            state.status = 'fulfilled!'
            state.movie = action.payload

        },
        [getMovieById.rejected]: (state, action) => {
            state.error = action.payload
        },

    }
});


const moviesReducer = moviesSlice.reducer;

export default moviesReducer;
