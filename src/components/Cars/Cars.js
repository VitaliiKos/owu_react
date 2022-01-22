// import {useEffect, useState} from 'react';
//
// import {carService} from "../../services/car.service";
// import Car from "../Car/Car";
//
// const Cars = ({trigger}) => {
//     const [cars, setCars] = useState([]);
//
//     useEffect(() => {
//         carService.getAll().then(value => setCars([...value]))
//     },[trigger])
//
//     return (
//         <div>
//             {cars.map(car => <Car key={car.id} car={car}/>)}
//         </div>
//     );
// };
//
// export default Cars;

import React, {useEffect, useState} from 'react';

import {carService} from "../../services/car.service";
import {Car} from "../Car/Car";

const Cars = ({checkCar, refresh}) => {
    const [cars, setCars] = useState([]);

    useEffect(()=>{
        carService.getAll().then(value => setCars([...value]))
    },[checkCar])

    return (
        <div>
            {cars.map(car=><Car key={car.id} item={car} refresh={refresh}/>)}

        </div>
    );
};


export {Cars};