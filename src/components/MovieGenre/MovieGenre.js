import React from 'react';
import {Link} from "react-router-dom";

const MovieGenre = ({movieByGenre}) => {

    const {genre_ids, id, title} = movieByGenre;
    
    console.log(movieByGenre)




    return (
        <div>

            <br/>
            <Link to={genre_ids.toString()}>{genre_ids}{title}</Link>
        </div>
        
    );
};

export {MovieGenre};