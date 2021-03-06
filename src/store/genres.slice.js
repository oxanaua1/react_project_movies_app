import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {genresService} from "../services";

const initialState = {
    genres: [],
    status: null,
    error: null,
    moviesByGenre: [],

}

export const getAllGenres = createAsyncThunk(
    'genresSlice/getAllGenres',
    async (_, {rejectedWithValue}) => {
        try {
            return await genresService.getAll()

        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);


export const getMoviesByGenreId = createAsyncThunk(
    'genresSlice/getMovieByGenreId',
    async ({genre_ids}, {rejectedWithValue}) => {
        try {
            return await genresService.getGenreById({genre_ids})
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);


const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllGenres.pending]: (state) => {
            state.status = 'pending'
        },
        [getAllGenres.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.genres = action.payload
        },
        [getAllGenres.rejected]: (state, action) => {
            state.error = action.payload
        },
        [getMoviesByGenreId.pending]: (state) => {
            state.status = 'pendingID!'
        },
        [getMoviesByGenreId.fulfilled]: (state, action) => {
            state.status = 'fulfilledID!'
            state.moviesByGenre = action.payload

        },
        [getMoviesByGenreId.rejected]: (state, action) => {
            state.error = action.payload
        },
    }
});


const genresReducer = genresSlice.reducer;
export default genresReducer;

