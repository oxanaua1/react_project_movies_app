import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {getAllGenres, getMoviesByGenreId} from "../../store";
import {Genre} from "../Genre/Genre";
import {MovieGenre} from "../MovieGenre/MovieGenre";


const GenreBadge = () => {

    const {genre_ids} = useParams();

    const {genres, moviesByGenre, status, error} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    // console.log(genre_ids)
    console.log(moviesByGenre)

    useEffect(() => {

        dispatch(getAllGenres())

    }, []);

    useEffect(() => {


        dispatch(getMoviesByGenreId({genre_ids}))



    }, [genre_ids]);

    // genre_ids => genre_ids.map(value => value.id)
    //genre_ids => genre_ids.filter(value => value.id === genre_ids.id)

    return (
        <div>

            {status}
            <div>
                {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
            </div>

            <div>
                {moviesByGenre.map(movieByGenre => <MovieGenre key={movieByGenre.id} movieByGenre={movieByGenre}/>)}
            </div>


            {error}

        </div>
    );
};

export {GenreBadge};