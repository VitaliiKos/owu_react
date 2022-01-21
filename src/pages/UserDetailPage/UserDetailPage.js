import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

import {userService} from "../../services/user.service";
import {UserDetail} from "../../components";

const UserDetailPage = () => {
    const params = useParams();
    const location = useLocation();
    const user = location.state
    const [chooseUser, setChooseUser] = useState(null);
    useEffect(()=>{
        if(user){
            setChooseUser(user)
            return
        }
        userService.getById(params.id).then(value => setChooseUser(value))
    },[params.id, user])

    return (
        <div>
            {chooseUser && (<UserDetail chooseUser={chooseUser}/>)}
            <Outlet/>
        </div>
    );
};

export {UserDetailPage};