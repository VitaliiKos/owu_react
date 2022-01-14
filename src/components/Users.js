import React, {useEffect, useState} from 'react';

import {userService} from "../services/user.service";
import User from "./User";
import '../css/users.css';

const Users = (props) => {
    const {item:{name,username,email}} = props;
    const [users, setUsers] = useState([]);

    useEffect(() => {
            let filterUser
            userService.getAll()
            .then(value =>{
                filterUser = value.filter(person =>
                person.name.includes(name) &&
                person.username.includes(username) &&
                person.email.includes(email))
                setUsers(filterUser)
        })
    },[email, name, username])
    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value}/>)
            }
        </div>
    );
};

export default Users;