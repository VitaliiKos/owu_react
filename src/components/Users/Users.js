import React from 'react';
import {Link} from "react-router-dom";

import css from './users.module.css'

const Users = ({item}) => {
    const {id, name, username}=item;

    return (
            <div className={css.user}>

                <div className={css.user_info}>
                    <h3>Id: {id}</h3>
                    <h3>Name: {name}</h3>
                    <h3>Username: {username}</h3>
                </div>

                <div className={css.user_button}>
                    <Link to={id.toString()} state={{...item}}>
                        <button>Detail</button>
                    </Link>
                    <Link to={id+'/albums'} state={id}>
                        <button>Albums</button>
                    </Link>

                </div>
            </div>

    );
};

export {Users};