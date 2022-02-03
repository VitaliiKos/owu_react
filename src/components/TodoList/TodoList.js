import React from 'react';
import {useSelector} from "react-redux";
import {Todo} from "../Todo/Todo";

const TodoList = () => {
    const {todoList} = useSelector(state => state['todoReducer']);
    return (
        <div>
            <h2>TODOLIST</h2>
            {todoList.map(item => <Todo key={item.id} item={item}/>)}
        </div>
    );
};

export {TodoList};