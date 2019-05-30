import React, {useState} from 'react';
import Atr from './Atr';
import './App.css';


function App() {

  return (
    <div className = "app">
      <h1>Welcome to ATR </h1>
      <Atr name = "Amrth Ashok Shenava" />
      <Atr name = "Irvin Cardena" />
      <Atr name = "Xiangxu Lee" />
      <Atr name = "Jared Butcher" />
 
    </div>

  );
}
export default App;
