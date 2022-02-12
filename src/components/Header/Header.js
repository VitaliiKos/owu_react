import React from 'react';
import {NavLink} from "react-router-dom";

import css from './header.module.css';

const Header = () => {

    return (
        <div>
            <div className={css.header}>
                <NavLink to="/movies">Home</NavLink>
                <NavLink to="/user">Profile</NavLink>
            </div>

        </div>
    );
};

export {Header};