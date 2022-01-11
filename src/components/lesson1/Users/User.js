import React from 'react';
import '../homework.css'

const User = (props) => {
    let {item:{id, name, surname, email}, styleClass} = props
    return (
            <div className={styleClass}>
                <div><strong>id:</strong> {id}</div>
                <div><strong>Name:</strong> {name}</div>
                <div><strong>Surname:</strong> {surname}</div>
                <div><strong>Email:</strong> {email}</div>
            </div>
    );
};

export default User;