import React, { useState } from 'react';
import  './App.css';

const btn = ({ setColor, color }) => {

  function handleClick() {
    setColor(color === 'Light' ? 'Dark' : 'Light');
  }

  return (
        <button onClick={handleClick}
         style={color === 'Light' ? {color: 'white', backgroundColor: 'black' } : {color: 'black', border: '1px solid black'}}>Go {color}</button>
  )
}

export default btn;