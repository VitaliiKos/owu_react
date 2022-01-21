import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {albumsService} from "../../services/albums.service";
import {Photo, UserPosts} from "../../components";

const PhotosPage = () => {
    const params = useParams();
    const photoId = params.photoId
    const location = useLocation();
    console.log( photoId)
    console.log( location.state)

    const [photos, setPhoto] = useState([]);
    useEffect(()=>{
        albumsService.getPhotos(location.state).then(value => setPhoto(value))
    },[location.state])
    console.log( albumsService.getPhotos(location.state))

    return (
        <div>
            {photos.map(photo => <Photo key={photo.id} item={photo}/>)}
        </div>
    );
};

export {PhotosPage};