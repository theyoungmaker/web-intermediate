/*
  Lesson 7 — Exercise 1: Counter
  Objectives:
  - Use useState to track a numeric value
  - Update state in response to a button click
  - Display state and apply a simple pluralization ternary
*/
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      You clicked {count} {count === 1 ? 'time' : 'times'}
    </button>
  );
}

export default Counter;


