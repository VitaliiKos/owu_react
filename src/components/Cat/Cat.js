import React from 'react';

import css from './cat.module.css'

const Cat = ({cat, dispatch}) => {

    return (
        <div className={css.cat}>
            <div><h3>{cat.name}</h3></div>
            <button onClick={() => dispatch({type: 'delete', target: 'cat', payload: cat.id})}>delete</button>
        </div>
    );
};

export {Cat};