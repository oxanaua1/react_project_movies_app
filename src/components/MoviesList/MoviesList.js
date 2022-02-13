import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getAllMovies, nextPage} from "../../store";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from "./MovieList.module.css"


const MoviesList = () => {

    const {movies, status, error, startPage} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const pages = [1, 2, 3, 4, 5];


    useEffect(() => {

        dispatch(getAllMovies({startPage}))

    }, [startPage])

    // const nextPage = (startPage) => {
    //     if (!startPage) {
    //         return ++startPage
    //     }
    // }

    return (
        <div>
            {/*className={css.CurrentPage===startPage ? 'CurrentPage':'page'}*/}

            {status}
            <div className={css.Pages}>{pages.map((page, index) =>
                <span key={index} className={css.Page}> {page}</span>)}</div>

            <div className={css.MovieListWrapper}>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
            {/*<button onClick={({pageNumber})=>{*/}
            {/*    --pageNumber*/}
            {/*}}>prev</button>*/}
            {/*<button onClick={()=>{*/}
            {/*    */}
            {/*}}>next</button>*/}

            {error}

        </div>
    );
};

export {MoviesList};