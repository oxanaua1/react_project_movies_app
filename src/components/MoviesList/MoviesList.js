import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getAllMovies} from "../../store";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from "./MovieList.module.css"
import {setCurrentPage} from '../../store'
import {useSearchParams} from "react-router-dom";


const MoviesList = () => {

    const {movies, status, error, page, totalPages} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // const pages = totalPages;
    // for (const page of pages) {
    //     console.log(page)
    // }

    console.log(page)
    console.log(totalPages)
   

    // const [searchParams,useSearchParams] = useSearchParams();
    //
    // useSearchParams(searchParams)

    useEffect(() => {
        dispatch(getAllMovies({page}))


    }, [page])

    console.log(page)


    return (
        <div>


            {status}

            <div className={css.Pages}>
                {/*<div className={currentPage === page ? css.CurrentPage : css.Page}> </div>*/}
                {pages.map((page, index) =>
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