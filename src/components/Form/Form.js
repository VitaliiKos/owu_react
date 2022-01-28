import React, {useReducer} from 'react';
import {useForm} from "react-hook-form";

import Cat from "../Cat/Cat";
import Dog from "../Dog/Dog";
import css from './form.module.css'


const Form = () => {
    const {register, handleSubmit} = useForm({mode: "onTouched"});

    const reduser = (state, action)=>{
       switch (action.type){
           case 'add':
               if (action.target === 'cat'){
                   return {...state, cats:[...state.cats, action.payload]}
               }
               if (action.target === 'dog'){
                   return {...state, dogs:[...state.dogs, action.payload]}
               }
               return state
           case 'delete':
               if (action.target === 'cat'){
                   return {...state, cats: state.cats.filter(value => value.id !== action.payload)}
               }
               if (action.target === 'dog'){
                   return {...state, dogs:state.dogs.filter(value => value.id !== action.payload)}
               }
               return state
           default:
               return state
       }
    }

    const catSubmit = ({cat})=>{
        dispatch({type: 'add' , target:'cat', payload:{name:cat, id:new Date().getTime()} })

    }
    const dogSubmit = ({dog})=>{
        dispatch({type:'add', target:'dog', payload:{name:dog, id:new Date().getTime() }})
    }

    const [state, dispatch]=useReducer(reduser,{cats:[] , dogs:[]})
    console.log(state)
    return (
        <div>
            <div className={css.animalForm}>
                <div className={css.formCat}>
                    <form onSubmit={handleSubmit(catSubmit)}>
                        <div><label>Cat: <input type="text" defaultValue={''} {...register('cat')}
                                                placeholder="Enter cat..."/></label></div>
                        <button>Add Cat</button>
                    </form>
                </div>

                <div className={css.formDog}>
                    <form onSubmit={handleSubmit(dogSubmit)}>
                        <div><label>Dog: <input type="text" defaultValue={''} {...register('dog')}
                                                placeholder="Enter dog..."/></label></div>
                        <button>Add Dog</button>
                    </form>
                </div>
            </div>


            <div className={css.animal}>
                <div className={css.catList}>{state.cats.map(cat => <Cat key={cat.id} cat={cat}
                                                                         dispatch={dispatch}/>)}</div>

                <div className={css.dogList}>{state.dogs.map(dog => <Dog key={dog.id} dog={dog}
                                                                         dispatch={dispatch}/>)}</div>
            </div>
        </div>
    );
};

export {Form};