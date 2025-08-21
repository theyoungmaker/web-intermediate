import React from 'react';

function WeatherSolution({ temp }) {
  const isHot = temp > 30;
  const style = {
    color: isHot ? 'red' : 'blue',
    fontSize: '24px',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    margin: '16px 0',
  };
  return <div style={style}>{isHot ? '🌞 Hot' : '❄️ Cold'}</div>;
}

export default WeatherSolution;


