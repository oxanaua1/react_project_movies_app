import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getAllMovies} from "../../store";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from "./MovieList.module.css"
import {useParams, useSearchParams} from "react-router-dom";


const MoviesList = () => {

    const {movies, status, error, currentPage, page} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const pages = [1, 2, 3, 4, 5];
    const [searchParams, setSearchParams] = useSearchParams();


    const setCurrentPage = (page) => {
  // if (searchParams){}
    return   currentPage === page


    }

    useEffect(() => {
        if (!searchParams.get('page')) {
            setSearchParams({page: '1'})
        }
        const page = searchParams.get('page');

        dispatch(getAllMovies({currentPage}))

    }, [searchParams])



    return (
        <div>


            {status}

            <div className={css.Pages}>
                {/*<div className={currentPage === page ? css.CurrentPage : css.Page}> </div>*/}
                {pages.map((page, index) =>
                    <span key={index} className={css.Page}
                          onClick={() => setCurrentPage(page)}
                    > {page}</span>)}
            </div>


            <div className={css.MovieListWrapper}>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>

            {error}

        </div>
    );
};

export {MoviesList};