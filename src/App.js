import './App.css';

import Lesson4 from "./components/Lesson4";


function App() {

    return (

        <div className="App">
            <h1>Hello</h1>
            <Lesson4 startValue1={100} startValue2={50} startValue3={0}/>
        </div>
    );
}

export default App;
