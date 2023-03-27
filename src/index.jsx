import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import ColorSlider from './components/ColorSlider.jsx';

const App = () => {
  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);

  const redSlide = (value) => {
    setRedValue(value)
  }

  const greenSlide = (value) => {
    setGreenValue(value)
  }

  const blueSlide = (value) => {
    setBlueValue(value)
  }

  return (
    <div className="color-panel">
      <h1>Mixér barev</h1>
      <div className="sliders">
        <ColorSlider baseColor='red' colorName='Červená' onValueChange={redSlide} value={redValue} />
        <ColorSlider baseColor='green' colorName='Zelená' onValueChange={greenSlide} value={greenValue} />
        <ColorSlider baseColor='blue' colorName='Modrá' onValueChange={blueSlide} value={blueValue} />
      </div>
      <div className="color-box" id="color-box" style={{ backgroundColor: `rgb(${redValue},${greenValue},${blueValue})`}}></div>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
