import React, { useState } from 'react';

function Color() {
  const [bgColor, setBgColor] = useState('white');

  const changeColor = (newColor) => {
    setBgColor(newColor);
  };

  return (
    <div>
      <div style={{ backgroundColor: bgColor,height:'100vh',justifyContent:'center' ,alignItems:'center',padding:'20px', borderRadius: '5px' }}>
        The current background color is: {bgColor}
      </div>
      <button onClick={() => changeColor("red")}>Red</button>
      <button onClick={() => changeColor("blue")}>Blue</button>
      <button onClick={() => changeColor("green")}>Green</button>
      <button onClick={() => changeColor("yellow")}>Yellow</button>
      <button onClick={() => changeColor("orange")}>Orange</button>
      <button onClick={() => changeColor("grey")}>Grey</button>
    </div>
  );
}

export default Color;
