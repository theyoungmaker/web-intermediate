/*
  Lesson 8 — Exercise 1: Weather Checker (Skeleton)
  Objectives:
  - Use useState to toggle between two UI states
  - Use a ternary operator for conditional text
  - Use && for conditional elements
*/
import React from 'react';

function WeatherDisplay() {
  // TODO: use React.useState to track whether it's sunny
  // const [isSunny, setIsSunny] = React.useState(true);
  const isSunny = true;

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>
      {/* TODO: Buttons to change the weather */}
      <div style={{ marginBottom: '16px' }}>
        <button
          onClick={() => {
            // setIsSunny(true)
          }}
          style={{ marginRight: '8px' }}
        >
          Set Sunny
        </button>
        <button
          onClick={() => {
            // setIsSunny(false)
          }}
        >
          Set Rainy
        </button>
      </div>

      {/* TODO: Conditional heading with ternary */}
      <h1>
        {isSunny ? '☀️ It’s sunny!' : '🌧️ It’s raining!'}
      </h1>

      {/* TODO: Show rainbow only when sunny (use &&) */}
      {isSunny && <p>🌈 What a beautiful day!</p>}
    </div>
  );
}

export default WeatherDisplay;


