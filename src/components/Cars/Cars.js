import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import {carGetAll} from "../../store";
import css from './cars.module.css'

const Cars = () => {
    const {cars, status, error} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(carGetAll())
    }, [])

    return (
        <div className={css.cars}>
            {status === 'loading' && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};