import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {albumsService} from "../../services/albums.service";
import css from './userAlbumPage.module.css'
import {Albums} from "../../components";

const UserAlbumsPage = () => {
    const {id} = useParams();

    const [albums, setAlbums] = useState([]);

    useEffect(() => {

        albumsService.getAlbumsById(id).then(value => setAlbums(value))
    }, [id])

    return (
        <div className={css.userAlbums}>
            {albums.map(albums => <Albums key={albums.id} item={albums}/>)}
            <Outlet/>

        </div>
    );
};

export {UserAlbumsPage};