import React from 'react';

const UserDetail = (props) => {
    const {item: {id, name, username, email,
        address:{street, suite, city, zipcode,
            geo:{lat, lng}}, phone, website,
        company:{catchPhrase, bs}}, styleClassname, getPosts} = props

    return (
        <div className={styleClassname}>
            <h3>User detail</h3>
            <em><strong>id:</strong> {id}</em>
            <em><strong>name:</strong> {name}</em>
            <em><strong>username:</strong> {username}</em>
            <em><strong>email:</strong> {email}</em>

            <em><strong>address:</strong> </em>
            <em><strong>street:</strong> {street}</em>
            <em><strong>suite:</strong> {suite}</em>
            <em><strong>city:</strong> {city}</em>
            <em><strong>zipcode:</strong> {zipcode}</em>
            <em><strong>geo:</strong> </em>

            <em><strong>lat:</strong> {lat}</em>
            <em><strong>lng:</strong> {lng}</em>

            <em><strong>phone:</strong> {phone}</em>
            <em><strong>website:</strong> {website}</em>

            <em><strong>company:</strong></em>
            <em><strong>catchPhrase:</strong>{catchPhrase}</em>
            <em><strong>bs:</strong>{bs}</em>
            <em>{username}</em>
            <button className={'userBtn'} onClick={() => getPosts(id)}>All Posts</button>

        </div>
    );
};

export default UserDetail;