import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {userService} from "../../services/user.service";
import css from './users.module.css';
import {Users} from "../../components";

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        userService.getAll().then(value => setUsers([...value]))
    },[])

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