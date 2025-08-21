/*
  Lesson 5 — Exercise 1: Props basics
  Objectives:
  - Create a small presentational component that receives data via props
  - Practice default values and prop usage in JSX
  - Try it in the NextLeap React.js compiler: https://nextleap.app/online-compiler/reactjs-programming
*/

import React from 'react';

function WelcomeMessage({ name = 'Friend', greeting = 'Hello' }) {
  return (
    <p style={{ margin: 0 }}>
      {greeting}, <strong>{name}</strong>!
    </p>
  );
}

function WelcomeMessageExercise() {
  return (
    <section style={{ padding: '16px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: 360 }}>
      <h2 style={{ marginTop: 0 }}>Exercise 1: Props Basics</h2>

      {/* TODO: Change the props below to see different outputs */}
      <WelcomeMessage name="Ada" greeting="Welcome" />
      <div style={{ height: 8 }} />
      <WelcomeMessage name="Grace" />
      <div style={{ height: 8 }} />
      <WelcomeMessage />

      {/* Bonus:
          - Add a new prop like `emoji` and render it before the name
          - Extract styles into a `textStyle` object and pass it as a prop
      */}
    </section>
  );
}

export default WelcomeMessageExercise;


