/*
  Lesson 7 — Exercise 1: Counter (Skeleton)
  Objectives:
  - Use useState to track a numeric value
  - Update state in response to a button click
  - Display state and apply a simple pluralization ternary
*/
import React from 'react';

function Counter() {
  // TODO: Initialize state for `count` with a starting value of 0
  // const [count, setCount] = React.useState(0);
  const count = 0; // temporary placeholder

  return (
    <button
      // TODO: Increment count on click
      onClick={() => {
        // setCount(count + 1)
      }}
    >
      You clicked {count} {count === 1 ? 'time' : 'times'}
    </button>
  );
}

export default Counter;


