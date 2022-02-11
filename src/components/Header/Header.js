import React from 'react';
import {NavLink} from "react-router-dom";

import css from './header.module.css';

const Header = () => {

    return (
        <div>
            <div className={css.header}>
                {/*<NavLink to="/">Home</NavLink>*/}
                <NavLink to="/movies">Home</NavLink>
            </div>

        </div>
    );
};

export {Header};