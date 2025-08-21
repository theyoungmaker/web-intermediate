/*
  Lesson 13 — Exercise 1: Dynamic values via props
  Objectives:
  - Accept a numeric prop and derive a boolean condition
  - Use a ternary to render different text based on the condition
  - Apply dynamic inline styles driven by the condition
*/

import React from 'react';

function Weather({ temp }) {
  const isHot = temp > 30;

  const style = {
    color: isHot ? 'red' : 'blue',
    fontSize: '24px',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    margin: '16px 0',
  };

  return (
    <div style={style}>
      {isHot ? '🌞 Hot' : '❄️ Cold'}
    </div>
  );
}

export default Weather;


