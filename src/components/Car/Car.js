import React from 'react';
// import {carService} from "../../services/car.service";

const Car = (props) => {
    const {car:{id, model, price, year}} = props;

    return (
        <div>
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button>Delete</button>
            <button>Update</button>
            <hr/>
        </div>
    );
};

export default Car;