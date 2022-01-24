import React, {useEffect, useState} from 'react';

import {carService} from "../../services/car.service";
import {Car} from "../Car/Car";

const Cars = ({checkCar, refresh, setUpdateCar, updateCar}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(value => setCars([...value]))
    }, [checkCar])

    return (
        <div>
            {cars.map(car => <Car key={car.id} item={car} refresh={refresh} setUpdateCar={setUpdateCar}
                                  updateCar={updateCar}/>)}
        </div>
    );
};


export {Cars};