import React from 'react';

import css from './userInfoPage.module.css'
import {UserInfo} from "../../components";
import {useSelector} from "react-redux";

const UserInfoPage = () => {
    const {themeStatus} = useSelector(state => state['movieReducer']);


    return (
        <div className={!themeStatus?css.userPage:css.userPageLight}>
            <UserInfo/>
        </div>
    );
};

export {UserInfoPage};