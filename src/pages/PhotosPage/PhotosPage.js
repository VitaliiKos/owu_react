import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {albumsService} from "../../services/albums.service";
import {Photo} from "../../components";
import css from './photoPage.module.css'

const PhotosPage = () => {
    const {albumId} = useParams();

    const [photos, setPhoto] = useState([]);

    useEffect(() => {
        albumsService.getPhotos(albumId).then(value => setPhoto(value))
    }, [albumId])

    return (
        <div className={css.wrap}>
            {photos.map(photo => <Photo key={photo.id} item={photo}/>)}
        </div>
    );
};

export {PhotosPage};