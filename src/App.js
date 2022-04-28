import './App.css';
import React, { useState, useEffect } from 'react';
import Btn from './Btn';

function App() {

  const [color, setColor] = useState('Light');

  const bodyEl = document.body;

  useEffect(() => {
    if(color === 'Light') {
      bodyEl.style.backgroundColor = '#fff';
    } else {
      bodyEl.style.backgroundColor = '#000';
    }
  }, [color]);

  return (
    <>
      <Btn setColor={setColor} color={color}/>
    </>
  );
}

export default App;
