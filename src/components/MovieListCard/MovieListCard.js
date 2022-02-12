import React from 'react';
import {Link} from "react-router-dom";

import {movieImages} from "../../config";
import css from './movieListCard.module.css'

const MovieListCard = ({moviesItem}) => {

    const {id, release_date, vote_average, original_title, poster_path} = moviesItem;

    return (
        <div className={css.movieCard}>
            <Link to={id.toString()}>

                <div className={css.moviePoster}>
                    <img src={movieImages + poster_path} alt={original_title}/>
                </div>

                <div className={css.movieCardTitle}>
                    <div><h3>{original_title}</h3></div>
                    <div className={css.movieRating}>
                        <h5>Vote average: {vote_average}</h5>
                        <h5>{release_date}</h5>
                    </div>
                </div>

            </Link>
        </div>
    );
};

export {MovieListCard};