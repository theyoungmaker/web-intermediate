import React, { useState } from 'react';

/*
  Lesson 8 — Exercise 3: Multi-ternary + conditional notices
  Goals:
  - Use nested ternaries to categorize a numeric value
  - Use conditional rendering to show contextual notices
*/

function TemperatureChecker() {
  const [temp, setTemp] = useState(22);

  const status = temp >= 25 ? 'hot' : temp <= 15 ? 'cold' : 'mild';
  const color = status === 'hot' ? '#d9480f' : status === 'cold' ? '#1d4ed8' : '#0f766e';
  const label = status === 'hot' ? '🔥 Hot' : status === 'cold' ? '❄️ Cold' : '😊 Mild';

  return (
    <section style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: 16 }}>
      <div style={{ marginBottom: 12 }}>
        <button onClick={() => setTemp(10)} style={{ marginRight: 8 }}>Set Cold</button>
        <button onClick={() => setTemp(22)} style={{ marginRight: 8 }}>Set Mild</button>
        <button onClick={() => setTemp(30)}>Set Hot</button>
      </div>

      <h1 style={{ color }}>{label} — {temp}°C</h1>

      {temp >= 35 && (
        <p role="alert" style={{ color: '#b91c1c' }}>Heat advisory: stay hydrated!</p>
      )}
      {temp <= 5 && (
        <p role="alert" style={{ color: '#0c4a6e' }}>Freezing warning: stay warm!</p>
      )}
    </section>
  );
}

export default TemperatureChecker;


