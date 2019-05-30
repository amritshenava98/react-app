import React from 'react';
import './App.css';

function Atr({name, role, description}){
  return(
    <div className="atr">
      <div className="atrelements">
        <h1>{name}</h1>
        <h2>{role}</h2>
        <h3>{description}</h3>
      </div>
    </div>
  );
}

export default Atr;
