import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from "./Layout.module.css";

const Layout = () => {
    return (
        <>
            <div className={css.header}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
            <div className={css.outlet}>
            <Outlet/>
            </div>
            <div className={css.footer}>
                Lesson 3 - "Routes" "Route" "Link"
            </div>
        </>
    );
};

export default Layout;