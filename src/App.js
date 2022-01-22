import {useState} from "react";

import Form from "./components/Form/Form";
import {Cars} from "./components";
import './App.css';

function App() {
    const [checkCar, setCheckCar] = useState(null);
    // console.log(checkCar)
  return (
    <div className="App">
     <h1>Hello! </h1>
        <Form refresh={setCheckCar}/>
        {/*<Form update={setCar}/>*/}
        {/*<Cars trigger={car}/>*/}
        <Cars checkCar={checkCar} refresh={setCheckCar}/>
    </div>
  );
}

export default App;
