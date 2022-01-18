import React, {useEffect, useState} from 'react';

import User from "./User";
import {userService} from "../service/user.service";
import UserDetail from "./UserDetail";
import Posts from "./Posts";
import '../css/users.css';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [post, setPost] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value));
    }, []);

    const getUserId = (id) => {
        userService.getById(id)
            .then(value => setUser(value));
    };

    const getPosts = (id) => {
        userService.getPosts(id)
            .then(value => setPost(value));
    }


    return (
        <div className={'userBlock'}>

            <div className={'list'}>
                <h3>User list</h3>
                {users.map(value => <User key={value.id} item={value} styleClass={'userList'}
                                          getUserID={getUserId} getPosts={getPosts}/>)}
            </div>

            {user &&
            <div className={'detail'}><UserDetail item={user} getPosts={getPosts} styleClassname={'UserDetail'}/></div>}
            {post && <div className={'posts'}>{post.map(value => <Posts key={value.id} item={value}/>)}</div>}
        </div>
    );
};

export default Users;
