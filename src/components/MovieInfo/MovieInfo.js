import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getMovieById} from "../../store";
import {urlMovieImg} from "../../services";
import css from "./MovieInfo.module.css"


const MovieInfo = () => {

    const {id} = useParams();
    const {movie, state, error} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getMovieById({id}))

    }, [id])

    return (
        <div>
            {state}

            {movie &&

                <div className={css.MovieInfoWrapper}
                     style={{
                         backgroundImage: `url(${urlMovieImg + movie.backdrop_path})`,
                         backgroundPosition: 'center',
                         backgroundSize: 'cover',
                         backgroundRepeat: 'no-repeat',
                         backgroundColor: 'rgba(255, 255, 255, 0.6)'
                     }}>

                    <div>
                        <img src={urlMovieImg + movie.poster_path} alt={movie.title}/>
                    </div>

                    <div className={css.Fond}>
                        <h2 className={css.Fond}>{movie.title}</h2>
                        <h3>{movie.tagline}</h3>
                        <div>Release Date: {movie.release_date}</div>
                        <div>Vote Average: {movie.vote_average}; All votes:{movie.vote_count}</div>
                        <div>Runtime:{movie.runtime}</div>
                        <div>
                            Genre: {movie.genres.map(genre => <li key={genre.id}> {genre.name}</li>)}
                        </div>
                        <div>
                            Production Companies: {movie.production_companies.map(productionCompany =>
                            <li key={productionCompany.id}>{productionCompany.origin_country}/{productionCompany.name}</li>)}
                        </div>
                        <div className={css.Overview}>Overview: {movie.overview}</div>

                    </div>

                </div>
            }

            {error}

        </div>
    );
}

export {MovieInfo};