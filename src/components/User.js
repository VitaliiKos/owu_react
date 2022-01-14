import React from 'react';

const User = (props) => {
    const {item: {id, name, username, email}} = props
    return (
        <div className={'users'}>
            <div><strong>id:</strong> {id}</div>
            <div><strong>Name:</strong> {name}</div>
            <div><strong>Surname:</strong> {username}</div>
            <div><strong>Email:</strong> {email}</div>

        </div>
    );
};

export default User;