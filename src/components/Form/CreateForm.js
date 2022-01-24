import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {CarValidator} from "../validators/car.validator";
import {carService} from "../../services/car.service";

const CreateForm = ({refresh}) => {
    const [formError, setFormError] = useState({});

    const {
        register, handleSubmit, formState: {errors}
    } = useForm({
        resolver: joiResolver(CarValidator), mode: "onTouched"
    });

    const submit = async (car) => {
        try {
            const newCar = await carService.addNew(car);
            refresh(newCar)
            alert(`Ви успішео додали :${car.model} `)

        } catch (error) {
            setFormError(error.response.data)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model: <input type="text" defaultValue={''} {...register('model')}
                                          placeholder="Enter model..."/></label></div>
                {errors.model && <h4>{errors.model.message}</h4>}

                <div><label>Price: <input type="number" defaultValue={''} {...register('price')}
                                          placeholder="Enter price"/></label></div>
                {errors.price && <h4>{errors.price.message}</h4>}

                <div><label>Year: <input type="number" defaultValue={''} {...register('year')}
                                         placeholder="Enter year"/></label></div>
                {errors.year && <h4>{errors.year.message}</h4>}
                <button>Add new car</button>
            </form>


        </div>
    );
};

export {CreateForm};