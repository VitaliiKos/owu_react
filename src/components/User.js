import React from 'react';

const User = (props) => {
    const {item: {id, name, username}, styleClass, getUserID} = props;

    return (
        <div className={styleClass}>
            <div><strong>id:</strong> {id}</div>
            <div><strong>Name:</strong> {name}</div>
            <div><strong>Surname:</strong> {username}</div>
            <button className={'userBtn'} onClick={() => getUserID(id)}>Click</button>

        </div>
    );
};

export default User;
