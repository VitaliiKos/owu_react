import React from 'react';

import css from './comments.module.css';

const Comment = (item) => {
    const {itemComment: {id, postId, name, email, body}} = item;

    return (
        <div>
            {item && (
                <div className={css.comments}>
                    <div><strong>id:</strong> {id}</div>
                    <div><strong>postId:</strong> {postId}</div>
                    <div><strong>name:</strong> {name}</div>
                    <div><strong>email:</strong> {email}</div>
                    <div><strong>Body:</strong> {body}</div>
                </div>
            )}
        </div>
    );
};

export {Comment};