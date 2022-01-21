import React from 'react';

import css from './usersPosts.module.css'

const UserPosts = ({item}) => {
    const {id, userId, title, body} = item;

    return (
        <div className={css.user_posts}>
            <h3>id: {id}</h3>
            <h3>userId: {userId}</h3>
            <h3>title: {title}</h3>
            <h3>body: {body}</h3>

        </div>
    );
};

export {UserPosts};