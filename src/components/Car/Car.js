import React from 'react';
import {useDispatch} from "react-redux";

import {carDelete, carToUpdate} from "../../store";
import css from './car.module.css'

const Car = ({car}) => {
    const {id, model, price, year} = car
    const dispatch = useDispatch();

    return (
        <div className={css.car}>
            <h4>ID: {id}</h4>
            <h4>Model: {model}</h4>
            <h4>Price: {price}</h4>
            <h4>Year: {year}</h4>
            <button onClick={() => dispatch(carDelete({id}))}>Delete</button>
            <button onClick={() => dispatch(carToUpdate({car}))}>Update</button>
        </div>
    );
};

export {Car};