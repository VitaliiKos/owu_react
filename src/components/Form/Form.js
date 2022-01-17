import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../../services/car.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {CarValidator} from "../validators/car.validator";

const Form = ({update}) => {
    const [formError,setFormError] = useState({});

    const {
        register, handleSubmit, formState:{errors}
    } = useForm({resolver:joiResolver(CarValidator), mode:'onTouched'});

    const submit = async (car) => {
        try {
            const newCar = await carService.create(car);
            update(newCar)
        } catch (error) {
            setFormError(error.response.data)
        }}

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model: <input type="text" defaultValue={''} {...register('model')}/></label></div>
                {errors.model && <span>{errors.model.message}</span>}
                <div><label >Price: <input type="text" defaultValue={''} {...register('price')}/></label></div>
                {errors.price && <span>{errors.price.message}</span>}
                <div><label>Year: <input type="text" defaultValue={''} {...register('year')}/></label></div>
                {errors.year && <span>{errors.year.message}</span>}
                <button>Save</button>
            </form>
            
        </div>
    );
};

export default Form;