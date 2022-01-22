import React from 'react';
import {carService} from "../../services/car.service";

const Car = ({item, refresh}) => {
    const {id, model, price, year} = item;
    // console.log(item)
    const deleteCar = () => {
      carService.deleteById(id).then(value =>
          refresh(value)
        // console.log(value)

      )
    }
    return (
        <div>
            <h3>id: {id}</h3>
            <h3>model: {model}</h3>
            <h3>price: {price}</h3>
            <h3>year: {year}</h3>
            <button onClick={()=>deleteCar()}>Delete</button>
            {/*<button onClick={}>Update</button>*/}
            <hr/>

        </div>
    );
};

export {Car};