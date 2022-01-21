import React, {useEffect, useState} from 'react';
import {Outlet, useLocation} from "react-router-dom";

import {albumsService} from "../../services/albums.service";

import css from './userAlbumPage.module.css'
import {Albums} from "../../components/Albums/Albums";

const UserAlbumsPage = () => {

    const location = useLocation();
    const albumId = location.state
    console.log(location)
    const[albums, setAlbums] = useState([]);

    useEffect(()=>{

        albumsService.getAlbumsById(albumId).then(value => setAlbums(value))
    },[albumId])
    console.log(albums)

    return (
        <div className={css.userAlbums}>
            <div>{albums.map(albums => <Albums key={albums.id} item={albums}/>)}</div>
            <div><Outlet/></div>
            
        </div>
    );
};

export {UserAlbumsPage};