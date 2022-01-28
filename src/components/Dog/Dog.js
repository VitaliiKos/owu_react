import React from 'react';

import css from './dog.module.css'

const Dog = ({dog, dispatch}) => {
    return (
        <div className={css.dog}>
            <h3>{dog.name}</h3>
            <button onClick={() => dispatch({type: 'delete', target: 'dog', payload: dog.id})}>delete</button>

        </div>
    );
};

export {Dog};