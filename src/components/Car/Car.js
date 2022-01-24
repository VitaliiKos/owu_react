import React from 'react';

import {carService} from "../../services/car.service";
import css from './car.module.css'

const Car = ({item, refresh, setUpdateCar, updateCar}) => {
    const {id, model, price, year} = item;

    const deleteCar = () => {
        carService.deleteById(id).then(value =>
            refresh(value)
        )
    }

    return (
        <div className={css.car}>
            <h3>Id: {id}</h3>
            <h3>Model: {model}</h3>
            <h3>Price: {price}</h3>
            <h3>Year: {year}</h3>
            <button onClick={() => deleteCar()}>Delete</button>
            <button onClick={() => setUpdateCar(item)}>Update</button>
            <hr/>
        </div>
    );
};

export {Car};