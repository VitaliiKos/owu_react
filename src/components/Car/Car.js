import React from 'react';
import {useDispatch} from "react-redux";
import {carDelete} from "../../store";
// import {useSelector} from "react-redux";

const Car = ({car:{id, model, price, year}}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <h3>ID:{id}</h3>
            <h3>Model:{model}</h3>
            <h3>Price:{price}</h3>
            <h3>Year:{year}</h3>
            <button onClick={()=>dispatch(carDelete({id}))}>Delete</button>
            <hr/>

        </div>
    );
};

export {Car};