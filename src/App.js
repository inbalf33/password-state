import './App.css';
import { useState } from 'react';
import CheckPass from './CheckPass';


function App() {
  const [toPass, setToPass] = useState('');
  

  function handleToDoCahnge(e){
    setToPass(e.target.value);
  }

  return (
    <div className="App">
      <input className='passInput' value= {toPass} onChange = {handleToDoCahnge}/>
      <button >Submit</button>
      <CheckPass toPass = {toPass}/>
    </div>
  );
}

export default App;
