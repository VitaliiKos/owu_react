import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import {genreGetAll, getByGenre} from "../../store";
import css from "./genrebadge.module.css";
import {GenreCard} from "../GenreCard/GenreCard";
import {MovieList} from "../MovieList/MovieList";

const GenreBadge = () => {
    const {genres, genre} = useSelector(state => state['movieReducer'])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreGetAll())
    }, [])
    const current_genre = typeof genre === 'number' ? genres.filter(item => item.id === genre) : [{name: 'All genres'}]

    return (
        < >
            <div className={css.genreList}>

                <div className={css.genreButton} onClick={() => dispatch(getByGenre({genre: ' ', page: 1}))}>
                    <NavLink to={''}>
                        <button>
                            All genres
                        </button>
                    </NavLink>
                </div>

                {genres.map(genreItem => <GenreCard key={genreItem.id} genreItem={genreItem}/>)}
            </div>
            <div className={css.currentGenre}>
                <h3>Current genre:</h3>
                <h3>{current_genre[0].name}</h3>
            </div>

            <div>
                <MovieList/>
            </div>
        </>
    );
};

export {GenreBadge};