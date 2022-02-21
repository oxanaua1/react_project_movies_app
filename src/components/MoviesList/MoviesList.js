import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getAllMovies, getTotalPages, setTotalPages} from "../../store";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from "./MovieList.module.css"
import {setCurrentPage} from '../../store'
import {useParams, useSearchParams} from "react-router-dom";


const MoviesList = () => {

    const {movies, status, error, page, totalPages, allPages} = useSelector(state => state.movies);
    const dispatch = useDispatch();

       console.log(totalPages)


    useEffect(() => {

        dispatch(getAllMovies({page}))
        dispatch(setTotalPages(allPages))

    }, [page, dispatch])


    return (
        <div>
            {JSON.stringify(setTotalPages(totalPages))}

            {status}

            <div className={css.Pages}>
                {/*<div className={currentPage === page ? css.CurrentPage : css.Page}> </div>*/}
                {totalPages.map((page, index) =>
                    <span key={index} className={css.Page}
                          onClick={() => dispatch(setCurrentPage({page}))}
                    > {page}</span>)}
            </div>


            <div className={css.MovieListWrapper}>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>

            {error}

        </div>
    );
}

export {MoviesList};