import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {userService} from "../../services/user.service";
import {Users} from "../../components";
import css from './users.module.css';

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]))
    }, [])

    return (
        <div className={css.usersPage}>
            <div className={css.usersList}>
                {users.map(user => <Users key={user.id} item={user}/>)}
            </div>
            <div className={css.usersInfo}>
                <Outlet/>
            </div>
        </div>
    );
};

export {UsersPage};