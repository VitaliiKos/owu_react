import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../Header/Header";
import css from './layout.module.css'
import {useSelector} from "react-redux";

const Layout = () => {
    const {themeStatus} = useSelector(state => state['movieReducer'])


    return (
        <div className={!themeStatus?css.layout:css.layoutLight}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {Layout};