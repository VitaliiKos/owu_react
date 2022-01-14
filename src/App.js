import {useState} from "react";

import Users from "./components/Users";
import './App.css';

function App() {
    const [form, setForm]=useState({name: '', username: '', email: ''});
    const userFilter = (event) => {
        event.preventDefault();
    }
    const onChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    }
  return (
    <div className="App">
      <form onSubmit={userFilter} className={'filterForm'}>
          <div><label>Name: <input type="text" name={'name'} value={form.name} onChange={onChange}/></label></div>
          <div><label> Username: <input type="text" name={'username'} value={form.username} onChange={onChange}/></label></div>
          <div><label>Email: <input type="text" name={'email'} value={form.email} onChange={onChange}/></label></div>
          <button>Submit</button>
      </form>
      <Users item={form}/>
    </div>
  );
}

export default App;
