import React from 'react';
import {Outlet, NavLink} from 'react-router-dom'

import css from './MoviesPage.module.css'

const MoviesPage = () => {
    return (
        <div>

            <div className={css.Header}>
                <NavLink to='/'>HOME</NavLink>
                <div className={css.Header}>
                    <NavLink to='/movies'>Movies</NavLink>
                    <NavLink to='/genres'>Genres</NavLink>
                </div>

            </div>
            <div><Outlet/></div>

        </div>
    );
};

export {MoviesPage};