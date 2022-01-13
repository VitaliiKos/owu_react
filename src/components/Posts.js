import React from 'react';

const Posts = (props) => {
    const {item:{id, title, userId, body}} = props
    return (
        <div>
            <div><strong>id:</strong> {id}</div>
            <div><strong>title:</strong> {title}</div>
            <div><strong>userId:</strong> {userId}</div>
            <div><p><strong>body:</strong> {body}</p></div>

        </div>
    );
};

export default Posts;