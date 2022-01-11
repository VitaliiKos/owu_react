import React from 'react';
import '../homework.css'

const Comment = (props) => {
    let {item:{id, postId, name, email, body}, styleClass} = props
    return (
        <div className={styleClass}>
            <div><strong>id:</strong> {id}</div>
            <div><strong>Name:</strong> {name}</div>
            <div><strong>PostId:</strong> {postId}</div>
            <div><strong>Email:</strong> {email}</div>
            <div><strong>Body:</strong> {body}</div>
        </div>
    );
};

export default Comment;