import React from 'react';
import {Link} from "react-router-dom";
import css from './Genre.module.css'

const Genre = ({genre}) => {
    const {id, name} = genre;


    return (
        <div className={css.GenreWrapper}>

            <Link to={`${id}/movies`}>{name}</Link>


        </div>


    );
};

export {Genre};