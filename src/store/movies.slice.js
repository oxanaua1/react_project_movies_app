import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../services";


const initialState = {
    movies: [],
    status: null,
    error: null,
    movie: null,
    startPage: 1,
    page: null,
    total_pages: 0,


}
export const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async ({startPage}, {rejectedWithValue, dispatch}) => {
        try {
           return  await moviesService.getAll({startPage})
            // dispatch(nextPage({startPage}))
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);
export const nextPage = (startPage) => {
  if (!startPage){
   return   ++startPage
  }
}

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
    reducers: {

    },
    extraReducers: {
        [getAllMovies.pending]: (state) => {
            state.status = 'pending'
        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
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
            state.startPage = action.payload.startPage
            state.page=action.payload.page
            state.total_pages = action.payload.total_pages


        },
        [getMovieById.rejected]: (state, action) => {
            state.error = action.payload
        },

    }
});


const moviesReducer = moviesSlice.reducer;
// export const {nextPage} = moviesSlice.actions;
export default moviesReducer;
