import {useForm} from "react-hook-form";

import css from './form.module.css'

const Form = ({dispatch}) => {

    const {register, handleSubmit} = useForm({mode: "onTouched"});

    const catSubmit = ({cat}) => {
        dispatch({type: 'add', target: 'cat', payload: {name: cat, id: new Date().getTime()}})

    }
    const dogSubmit = ({dog}) => {
        dispatch({type: 'add', target: 'dog', payload: {name: dog, id: new Date().getTime()}})
    }

    return (

        <div className={css.animalForm}>
            <div>

                <form onSubmit={handleSubmit(catSubmit)}>
                    <div><label>Cat: <input type="text" defaultValue={''} {...register('cat')}
                                            placeholder="Enter cat..."/></label></div>
                    <button>Add Cat</button>
                </form>
            </div>

            <div>
                <form onSubmit={handleSubmit(dogSubmit)}>
                    <div><label>Dog: <input type="text" defaultValue={''} {...register('dog')}
                                            placeholder="Enter dog..."/></label></div>
                    <button>Add Dog</button>
                </form>
            </div>

        </div>
    );
};

export {Form};