import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../Header/Header";
import css from './layout.module.css'

const Layout = () => {

    return (
        <div className={css.layout}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {Layout};