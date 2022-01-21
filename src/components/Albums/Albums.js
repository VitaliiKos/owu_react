import React from 'react';

import css from './albumsPage.module.css';
import {Link} from "react-router-dom";

const Albums = ({item}) => {
    const {id, userId, title} = item;
    return (
        <div className={css.albums}>
            <h3>Id: {id}</h3>
            <h3>UserId: {userId}</h3>
            <h3>Title: {title}</h3>
            <div className={css.albumsButton}>
                <Link to={`${id}/photos`} state={id}>
                    <button>All photos >></button>
                </Link>
            </div>


        </div>
    );
};

export {Albums};