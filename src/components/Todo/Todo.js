import React from 'react';
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";

import {chooseTODO, deleteTODO} from '../../store/todo.slice'
import css from './todo.module.css'

const Todo = ({item}) => {
    const {id, title: {titleTodo}, status} = item;
    const {register, handleSubmit} = useForm();

    const dispatch = useDispatch();

    const submit = () => {
        dispatch(chooseTODO(id))
    }

    return (
        <div>
            <form onInput={handleSubmit(submit)}>
                <div className={css.todoList}>
                    <div><input type="checkbox" value={status} {...register('checkTodo')}/></div>
                    <div className={status ? css.check : ''}><h3>{titleTodo}</h3></div>
                    <div className={css.checkButton}>
                        <button onClick={() => dispatch(deleteTODO({id}))}>Delete</button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export {Todo};