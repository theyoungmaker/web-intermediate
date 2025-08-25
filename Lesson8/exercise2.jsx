/*
  Lesson 8 — Exercise 1: Weather Checker (Skeleton)
  Objectives:
  - Use useState to toggle between two UI states
  - Use a ternary operator for conditional text
  - Use && for conditional elements
*/
import React from "react";

function WeatherDisplay() {
  // TODO: use React.useState to track whether it's sunny
  const isSunny = true;

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
      {/* TODO: Buttons to change the weather */}
      <div style={{ marginBottom: "16px" }}>
        <button
          onClick={() => {
            // TODO: change sunny to true
          }}
          style={{ marginRight: "8px" }}
        >
          Set Sunny
        </button>
        <button
          onClick={() => {
            // TODO: change sunny to false
          }}
        >
          Set Rainy
        </button>
      </div>

      {/* TODO: Conditional heading with ternary */}
      <h1>{"☀️ It’s sunny!"}</h1>
      <h1>{"🌧️ It’s raining!"}</h1>

      {isSunny && <p>🌈 What a beautiful day!</p>}
      {/* TODO: Show What a gloomy day only when not Sunny (use &&) */}
    </div>
  );
}

export default WeatherDisplay;
