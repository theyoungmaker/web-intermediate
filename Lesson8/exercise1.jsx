/*
  Lesson 8 — Exercise 1: Weather Checker
  Objectives:
  - Use useState to toggle between two UI states
  - Use a ternary operator for conditional text
  - Use && for conditional elements
*/
import React, { useState } from 'react';

function WeatherDisplay() {
  // 1. State: is it sunny?
  const [isSunny, setIsSunny] = useState(true);

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>
      {/* 2. Buttons to change the weather */}
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setIsSunny(true)} style={{ marginRight: '8px' }}>
          Set Sunny
        </button>
        <button onClick={() => setIsSunny(false)}>
          Set Rainy
        </button>
      </div>

      {/* 3. Conditional heading with ternary */}
      <h1>
        {isSunny ? '☀️ It’s sunny!' : '🌧️ It’s raining!'}
      </h1>

      {/* Bonus: show rainbow only when sunny */}
      {isSunny && <p>🌈 What a beautiful day!</p>}
    </div>
  );
}

export default WeatherDisplay;


