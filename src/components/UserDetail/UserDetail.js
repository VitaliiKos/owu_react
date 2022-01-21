import React from 'react';

import css from './userDetail.module.css'
import {Link} from "react-router-dom";

const UserDetail = (props) => {
    const {
        chooseUser:{id, name, username, email, phone, website,company,
            company:{bs, catchPhrase},
            address:{city, street, suite, zipcode, geo:{lat, lng}}}} = props;
    return (
        <div className={css.userInfo}>
            <h4><em>Id: {id}</em></h4>
            <h4><em>Name: {name}</em></h4>
            <h4><em>Username: {username}</em></h4>
            <h4><em>Email: {email}</em></h4>
            <h4><em>Phone: {phone}</em></h4>
            <h4><em>Website: {website}</em></h4>
            <h4><em>Address: </em> </h4>
            <div className={css.userAddress}>
                <h4><em>City: {city}. </em></h4>
                <h4><em>Street: {street}. </em></h4>
                <h4><em>Suite: {suite}. </em></h4>
                <h4><em>Zipcode: {zipcode}. </em></h4>
                <h4><em>Geo:</em> </h4>
                <div className={css.userGeo}>
                    <h4><em>Lat: {lat}</em></h4>
                    <h4><em>Lng: {lng}</em></h4>
                </div>
            </div>
            <h4>Company: </h4>
            <div className={css.userCompany}>
                <h4><em>Name:{company.name}. </em></h4>
                <h4><em>Bs: {bs}. </em></h4>
                <h4><em>CatchPhrase: {catchPhrase}. </em></h4>
            </div>
            <div className={css.allUserPosts}>
                <Link to={'posts'}>
                    <button>All posts</button>
                </Link>

            </div>

        </div>
    );
};

export {UserDetail};