import {configureStore} from "@reduxjs/toolkit";

import moviesReducer from "./movies.slice";
import genresReducer from "./genres.slice";


let store = configureStore({
    reducer: {
        movies: moviesReducer,
        genres: genresReducer,
    }

});

export default store;