import {useState} from "react";

import {Cars, CreateForm, EditForm} from "./components";
import css from './App.module.css'

function App() {
    const [checkCar, setCheckCar] = useState(null);
    const [updateCar, setUpdateCar] = useState({});

    return (
        <div className={css.container}>
            {/*<h1>CRUD App with Hooks</h1>*/}

            <div className={css.formContent}>
                {!updateCar.id ?
                    (
                        <div className={css.form}>
                            <h2>Create a new car</h2>
                            <CreateForm refresh={setCheckCar}/>
                        </div>
                    ) : (
                        <div>
                            <h2>Edit car</h2>
                            <EditForm refresh={setCheckCar} updateCar={updateCar}/>
                            <button onClick={() => {
                                setUpdateCar({})
                            }}>Return to create form
                            </button>
                        </div>
                    )
                }
            </div>
            <div className={css.carsContent}>
                <h2>View cars</h2>
                <Cars checkCar={checkCar} refresh={setCheckCar} setUpdateCar={setUpdateCar}
                      updateCar={{...updateCar}}/>
            </div>
        </div>
    );
}

export default App;
