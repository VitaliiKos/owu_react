import {useReducer} from "react";

import {Cat, Dog, Form} from "./components";
import css from './App.module.css';

function App() {

    const reducer = (state, action) => {

        switch (action.type) {
            case 'add':
                if (action.target === 'cat') {
                    return {...state, cats: [...state.cats, action.payload]}
                }
                if (action.target === 'dog') {
                    return {...state, dogs: [...state.dogs, action.payload]}
                }
                return state
            case 'delete':
                if (action.target === 'cat') {
                    return {...state, cats: state.cats.filter(value => value.id !== action.payload)}
                }
                if (action.target === 'dog') {
                    return {...state, dogs: state.dogs.filter(value => value.id !== action.payload)}
                }
                return state
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []})

    return (
        <div className={css.App}>
            <h1>Lesson 4 classwork</h1>
            <Form dispatch={dispatch}/>

            <div className={css.animal}>
                <div className={css.catList}>{state.cats.map(cat => <Cat key={cat.id} cat={cat}
                                                                         dispatch={dispatch}/>)}</div>

                <div className={css.dogList}>{state.dogs.map(dog => <Dog key={dog.id} dog={dog}
                                                                         dispatch={dispatch}/>)}</div>
            </div>


        </div>
    );
}

export default App;
