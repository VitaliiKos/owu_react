import React from 'react';

import css from './photo.module.css'

const Photo = ({item}) => {
    const {id, albumId, title, thumbnailUrl, url} = item;
    return (
        <div className={css.photoItem}>
            <h3>id: {id}</h3>
            <h3>albumId: {albumId}</h3>
            <h3>title: {title}</h3>
            <img src={thumbnailUrl} alt="thumbnailUrl"/>
            <img src={url} alt="url"/>
        </div>
    );
};

export {Photo};