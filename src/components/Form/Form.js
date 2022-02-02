import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {carCreate, updateCarById} from "../../store";
import css from './form.module.css';

const Form = () => {
    const {carForUpdate} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();
    const {handleSubmit, reset, setValue, register} = useForm();

    const submit = (data) => {
        if (carForUpdate) {
            dispatch(updateCarById({id: carForUpdate.id, car: data}))
            reset()
            return
        }
        dispatch(carCreate({data}))
        reset()
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate])

    return (
        <div className={css.form}>
            <form onSubmit={handleSubmit(submit)}>

                <div className={css.blockInput}>
                    <label>Model: <input type="text" {...register('model')}/></label>
                    <label>Price: <input type="text" {...register('price')}/></label>
                    <label>Year: <input type="text" {...register('year')}/></label>
                </div>

                <button>{carForUpdate ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export {Form};