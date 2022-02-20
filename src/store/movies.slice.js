import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../services";


const initialState = {
    movies: [],
    status: null,
    error: null,
    movie: null,
    page: 1,
    currentPage: null,
    totalPages: [],


}
export const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async ({page}, {rejectedWithValue}) => {
        try {
            return await moviesService.getAll({page})


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
    reducers: {
        setCurrentPage: ((state, action) => {
                state.page = action.payload.page;
            }
        ),
        // setTotalPages:((state, action) => {
        //     state.totalPages.forEach(page=>page)
        // })

    },
    extraReducers: {
        [getAllMovies.pending]: (state) => {
            state.status = 'pending'
        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload
            // state.pages = action.payload.pages
            // state.currentPage = action.payload.currentPage
            // state.totalPages = action.payload
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

export const {setCurrentPage} = moviesSlice.actions;
export default moviesReducer;
