import React from 'react';

import {actorImages} from "../../config";
import css from './actor.module.css'

const Actor = ({actor}) => {
    const {name, character, profile_path, known_for_department} = actor;

    return (

        <>
            {profile_path &&
            (<div className={css.actorDetail}>
                    <div className={css.actorPoster}>
                        <img src={actorImages + profile_path} alt={known_for_department}/>
                    </div>

                    <div className={css.actorPosterDescription}>
                        <div><h5>{name}</h5></div>
                        <div><h5>{character}</h5></div>

                    </div>
                </div>
            )
            }
        </>
    );
};

export {Actor};