import React, {useState} from 'react';
import Atr from './Atr';
import './App.css';


function App() {

  const[isRed, setRed] = useState(false);
  const[count, setCount] = useState(0);

  const changeColor = () => {
       setCount(count + 1);
  }
  return (
    <div className = "app">
      <h1>Welcome to ATR Lab</h1>
      <Atr />
    </div>

  );
}
export default App;
