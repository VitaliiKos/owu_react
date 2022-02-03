import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todoList: [],
    status: false,
    todoCounter: 0,
    todoComplete: 0
}

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTODO: (state, action) => {
            state.todoList.push({id: new Date().getTime(), title: action.payload.data, status: false})
            state.todoCounter += 1
        },
        deleteTODO: (state, action) => {
            const todoSel = state.todoList.find(value => value.id === action.payload.id);
            state.todoComplete -= todoSel.status ? 1 : 0
            state.todoList = state.todoList.filter(item => (item.id !== action.payload.id))
            state.todoCounter -= 1

        },
        chooseTODO: (state, action) => {
            const todoSelected = state.todoList.find(value => value.id === action.payload);
            todoSelected.status = !todoSelected.status

            state.todoComplete += todoSelected.status ? 1 : -1
        }
    }
})

const todoReducer = todoSlice.reducer

export const {addTODO, deleteTODO, chooseTODO} = todoSlice.actions
export default todoReducer