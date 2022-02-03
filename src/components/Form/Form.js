import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {addTODO} from '../../store/todo.slice'
import css from './form.module.css'

const Form = () => {
    const {register, handleSubmit, reset,} = useForm();
    const dispatch = useDispatch();
    const {todoCounter, todoComplete} = useSelector(state => state['todoReducer']);

    const submit = (data) => {
        dispatch(addTODO({data}))
        reset()
    }

    return (
        <div>
            <div className={css.todoResult}>
                <div><h2>All: {todoCounter}</h2></div>
                <div><h2>Completed: {todoComplete}</h2></div>
            </div>
            <hr/>
            <form onSubmit={handleSubmit(submit)}>
                <label><input type="text" {...register('titleTodo')}/></label>
                <button>Submit</button>
            </form>


        </div>
    );
};

export {Form};