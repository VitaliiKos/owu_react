import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services/car.service";
import {CarValidator} from "../validators/car.validator";

const EditForm = ({updateCar: {id, model, price, year}, refresh}) => {
    const [formError, setFormError] = useState({});

    const {
        register, handleSubmit, setValue, formState: {errors}
    } = useForm({
        resolver: joiResolver(CarValidator), mode: "onTouched"
    });

    useEffect(() => {
        setValue('model', model)
        setValue('price', price)
        setValue('year', year)
    }, [id, model, price, setValue, year])

    const submit = async (car) => {
        try {
            const newCar = await carService.updateById(id, car);
            refresh(newCar)

        } catch (error) {
            setFormError(error.response.data)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model: <input type="text" defaultValue={''} {...register('model')}
                                          placeholder="Enter model..."/></label></div>
                {errors.model && <span>{errors.model.message}</span>}

                <div><label>Price: <input type="number" defaultValue={''} {...register('price')}
                                          placeholder="Enter price"/></label></div>
                {errors.price && <span>{errors.price.message}</span>}

                <div><label>Year: <input type="number" defaultValue={''} {...register('year')}
                                         placeholder="Enter year"/></label></div>
                {errors.year && <span>{errors.year.message}</span>}

                <button>Edit</button>

            </form>


        </div>
    );
};

export {EditForm};