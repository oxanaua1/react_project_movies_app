import React from 'react';
import {Link} from "react-router-dom";

const MovieGenre = ({movieByGenre}) => {

    const {genre_ids, id, title} = movieByGenre;
    // console.log(movieByGenre)
    return (
        <div>
            {/*genre_ids: {genre_ids => genre_ids.filter(value => value.id === genre_ids.id)}*/}
            <Link to={genre_ids.toString()}>{title}</Link>
            {/*{{genre_ids => genre_ids.filter(value => value.id === genre_ids.id)}} {id}{title}*/}

        </div>
    );
};

export {MovieGenre};