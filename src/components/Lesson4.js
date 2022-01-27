import React, {useReducer} from 'react';

import css from './game.module.css'

const Lesson4 = ({startValue1, startValue2, startValue3}) => {

    const reducer = (state, action) => {
        state = {...state, count3: state.count3 + action.payload}
        if (state.count1 <= 0) {
            return {...state, count1: startValue1}
        }
        if (state.count2 <= 0) {
            return {...state, count2: startValue2}
        }
        if ((state.count2 <= 0) && (state.count1 > 0)) {
            alert('Ви заробили 500XP ')
            return {...state, count3: state.count3 + 500}
        }


        switch (action.type) {
            case 'simpleHit':
                return {...state, count2: state.count2 - action.payload}
            case 'hardHit':
                return {...state, count2: state.count2 - action.payload}
            case 'magicHit':
                return {...state, count2: state.count2 - action.payload}


            case 'simpleHitOrk':
                return {...state, count1: state.count1 - action.payload}
            case 'hardPotion':
                return {...state, count1: state.count1 - action.payload}
            case 'cheatHit':
                return {...state, count2: state.count2 - action.payload}
            default:
                throw new Error(state)
        }
    }

    const [state, dispatch] = useReducer(reducer, {count1: startValue1, count2: startValue2, count3: startValue3});

    return (

        <div>
            {(startValue1 > 0) && (
                <div className={css.game}>
                    <div className={css.heroImg}>
                        <div>
                            <h4>
                                Здоров'я: {state.count1}/{startValue1}
                            </h4>
                        </div>
                        <div className={css.heroAvatar}>
                            <img
                                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/359d5f28-207a-4da6-80f0-abc17df771cf/da1hsgj-6ebac532-d26e-40a4-b87c-aa87a1b539fd.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM1OWQ1ZjI4LTIwN2EtNGRhNi04MGYwLWFiYzE3ZGY3NzFjZlwvZGExaHNnai02ZWJhYzUzMi1kMjZlLTQwYTQtYjg3Yy1hYTg3YTFiNTM5ZmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.awRoNM-gN9eELF-S9UoetSbMTwocPw8mYWOV-RelvOc"
                                alt="avatar"/></div>
                    </div>

                    <div className={css.hero}>
                        <h3>New game</h3>
                        <div className={css.heroAttac}>

                            <div className={css.heroBtn}>
                                <label>
                                    <h4>Простий Удар </h4>
                                    <button onClick={() => dispatch({type: 'simpleHit', payload: 5})}>Hit simple "5"
                                    </button>
                                </label>
                            </div>

                            <div className={css.heroBtn}>
                                <label>
                                    <h4>Сильний удар</h4>
                                    <button onClick={() => dispatch({type: 'hardHit', payload: 15})}>Hit hard "15"
                                    </button>
                                </label>
                            </div>

                            <div className={css.heroBtn}>
                                <label>
                                    <h4>Магічний шар</h4>
                                    <button onClick={() => dispatch({type: 'magicHit', payload: 20})}>Magic "20"
                                    </button>
                                </label>
                            </div>

                            <div className={css.heroBtn}>
                                <label>
                                    <h4>Супер-пупер удар </h4>
                                    <button onClick={() => dispatch({
                                        type: 'cheatHit',
                                        payload: startValue2
                                    })}>CheatHit {startValue2}
                                    </button>
                                </label>
                            </div>

                        </div>

                        <div className={css.heroHelp}>
                            <div className={css.damage}>
                                <h4>Нанесений урон:</h4>
                                {state.count3}
                            </div>


                            <div className={css.heroBtn}>
                                <label>
                                    <h4>Удар Орка </h4>
                                    <button onClick={() => dispatch({type: 'simpleHitOrk', payload: 10})}>Hit "-10"
                                    </button>
                                </label></div>

                            <div className={css.heroBtn}>
                                <label>
                                    <h4>Злість </h4>
                                    <button onClick={() => dispatch({type: 'hardPotion', payload: 12})}>Удар "-12"
                                    </button>
                                </label>
                            </div>

                        </div>
                    </div>

                    <div className={css.target}>
                        <div>
                            <h4>Здоров'я: {state.count2}/{startValue2}</h4>
                        </div>
                        <div className={css.targetImg}>
                            <img
                                src="https://media.moddb.com/cache/images/groups/1/9/8054/thumb_620x2000/Orcs_is_green_green_is_best_b0798a76828592742bdb2bb8510a0f55.jpg"
                                alt="ork"/></div>
                    </div>


                    <div className={css.log}>
                        {
                            (state.count1 <= 0) ? (
                                    <div><h3>Тренуйся і все получиться!</h3><h4>Загальний урон в бою: {state.count3}</h4>
                                    </div>) :
                                (state.count2 <= 0) ? (
                                        <div><h3>Ви перемогли!</h3><h4>Загальний урон в бою: {state.count3}</h4></div>) :
                                    <div>Не зупиняйся</div>
                        }
                    </div>
                </div>
            )}

        </div>


    );
};

export default Lesson4;