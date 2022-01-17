import {useState} from "react";

import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";
import './App.css';

function App() {
    const [car, setCar] = useState(null);

  return (
    <div className="App">
     <h1>Hello! </h1>
        <Form update={setCar}/>
        <Cars trigger={car}/>
    </div>
  );
}

export default App;
