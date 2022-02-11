import React from 'react';

import {movieImages} from "../../config";
import css from './detailCard.module.css'
import {Actors} from "../Actors/Actors";

const MovieDetailCard = ({movieItem}) => {
    const {
        genres,
        id,
        tagline,
        title,
        overview,
        movieItembudget,
        homepage,
        release_date,
        runtime,
        vote_average
    } = movieItem;
    const sectionStyle = {
        width: "100%",
        height: "617px",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${movieImages + movieItem.backdrop_path})`
    };

    return (
        <>
            <div className={css.detailCard} style={sectionStyle}>
                <div className={css.movieDetail}>

                    <div className={css.moviePoster}>
                        <img src={movieImages + movieItem.poster_path} alt=''/>
                    </div>

                    <div className={css.moviePosterDescription}>
                        <h3>{title}({release_date.split('-')[0]})</h3>
                        <div className={css.genreList}>
                            <em>
                                {release_date}
                                {genres.map(moviegenre => ', ' + moviegenre.name)}
                                {' ' + Math.floor(runtime / 60)}h {runtime % 60}m
                            </em>
                        </div>

                        <h4><em>{tagline}</em></h4>
                        <h3>Overview</h3>
                        <em>{overview}</em>

                        <h3>{movieItembudget}</h3>
                        <h3><a href={homepage}>{homepage}</a></h3>
                        <div className={css.movieMark}>
                            <h3>{vote_average} / 10</h3>
                        </div>
                    </div>
                </div>
            </div>
            <><Actors movieId={id}/></>
        </>
    );
};

export default MovieDetailCard;