import React, {useEffect} from 'react';
import {Car} from "../Car/Car";
import {useDispatch, useSelector} from "react-redux";
import {carGetAll} from "../../store";

const Cars = () => {
    const {cars, status, error} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(carGetAll())
        // console.log(cars)
    }, [])

    // console.log(cars)
    return (
        <div style={{margin: '50px'}}>
            {status==='loading' && <h1>Loading...</h1>}
            {error&&<h1>{error}</h1>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};