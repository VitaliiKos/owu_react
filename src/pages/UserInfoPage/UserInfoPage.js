import React from 'react';

import css from './userInfoPage.module.css'
import {UserInfo} from "../../components";

const UserInfoPage = () => {

    return (
        <div className={css.userPage}>
            <UserInfo/>
        </div>
    );
};

export {UserInfoPage};