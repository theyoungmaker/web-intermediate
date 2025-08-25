import React, { useState } from 'react';

function WeatherDisplaySolution() {
  const [isSunny, setIsSunny] = useState(true);
  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setIsSunny(true)} style={{ marginRight: '8px' }}>Set Sunny</button>
        <button onClick={() => setIsSunny(false)}>Set Rainy</button>
      </div>
      <h1>{isSunny ? '☀️ It’s sunny!' : '🌧️ It’s raining!'}</h1>
      {isSunny && <p>🌈 What a beautiful day!</p>}
    </div>
  );
}

export default WeatherDisplaySolution;


