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


    useEffect(() => {

        dispatch(getAllGenres())

    }, []);

    useEffect(() => {
        if (genre_ids){
            dispatch(getMoviesByGenreId({genre_ids}))
        }

        console.log(moviesByGenre)

    }, [genre_ids]);


    return (
        <div>

            {status}
            <div>
                {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
            </div>

            <div>
                {/*{moviesByGenre.filter(movieByGenre => movieByGenre.genre_ids.id === genre_ids)}*/}

                {moviesByGenre.map(movieByGenre => <MovieGenre key={movieByGenre.id} movieByGenre={movieByGenre}/>)}


            </div>

            {error}


        </div>
    );
};

export {GenreBadge};