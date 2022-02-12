import React from 'react';

import {movieImages} from "../../config";
import css from './userInfoCard.module.css'

const UserInfoCard = ({myFamousActor}) => {
    const {
        biography,
        birthday,
        homepage,
        known_for_department,
        name,
        place_of_birth,
        profile_path
    } = myFamousActor;

    return (
        <div>
            <div className={css.mainDetails}>
                <div className={css.mainFoto}>
                    <img src={movieImages + profile_path} alt={name}/>
                </div>

                <div>
                    <h1>{name}</h1>
                    <h2>{birthday}</h2>
                    <h2>{place_of_birth}</h2>
                    <h2>{known_for_department}</h2>
                    <h2><a href={homepage}>{homepage}</a></h2>
                </div>
            </div>

            <div className={css.userDescription}><h3>{biography}</h3></div>

        </div>
    );
};

export {UserInfoCard};