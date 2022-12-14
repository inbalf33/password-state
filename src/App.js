import './App.css';
import { useState } from 'react';
import CheckPass from './CheckPass';


function App() {
  const [password, setPassword] = useState('');
  const [preventSubmit, setPreventSubmit] = useState(true);
  

  function handlePassword(e){
    setPassword(e.target.value);
  }

  return (
    <div className="App">
      <input type = "password" value = {password} onChange = {handlePassword}></input>
      <button disabled = {preventSubmit}>Submit</button>
      <CheckPass password = {password} prevent = {setPreventSubmit}></CheckPass>
    </div>
  );
}

export default App;
