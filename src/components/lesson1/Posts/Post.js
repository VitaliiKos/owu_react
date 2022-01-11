import React from 'react';
import '../homework.css'

const Post = (props) => {
    let {item:{id, userId, title, body}, styleClass} = props
    return (
        <div className={styleClass}>
            <div><strong>Id:</strong> {id}</div>
            <div><strong>UserId:</strong> {userId}</div>
            <div><strong>Title:</strong> {title}</div>
            <div><strong>Body:</strong> {body}</div>
        </div>
    );
};

export default Post;