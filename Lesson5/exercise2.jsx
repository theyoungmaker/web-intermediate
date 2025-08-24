import React from 'react';

/*
  Lesson 5 — Exercise 2: Embedded Expressions
  Objectives:
  - Embed JavaScript expressions inside JSX: arithmetic, conditionals, arrays, dates
  - Practice conditional rendering with && and ?:
  - Try it in the NextLeap React.js compiler: https://nextleap.app/online-compiler/reactjs-programming
*/

function EmbeddedExpressionsExercise() {
  const name = 'Sam';
  const isMember = true;
  const notifications = 3;
  const price = 19.99;
  const items = ['Apples', 'Bananas', 'Cherries'];
  const now = new Date();

  const sectionStyle = { padding: 16, border: '1px solid #ddd', borderRadius: 8, maxWidth: 480 };
  const listStyle = { margin: '8px 0 0 16px' };

  return (
    <section style={sectionStyle}>
      <h2 style={{ marginTop: 0 }}>Exercise 2: Embedded Expressions</h2>

      {/* Basic arithmetic */}
      <p>2 + 2 = {2 + 2}</p>

      {/* Use variables */}
      <p>Hello, {name}!</p>

      {/* Conditional (ternary) */}
      <p>{isMember ? 'Member discount applied.' : 'Join to save 10%.'}</p>

      {/* Logical && rendering */}
      {notifications > 0 && <p>You have {notifications} new notification{notifications === 1 ? '' : 's'}.</p>}

      {/* Number formatting */}
      <p>Total: ${price.toFixed(2)}</p>

      {/* Mapping arrays */}
      <div>
        <p>Uppercased items:</p>
        <ul style={listStyle}>
          {items.map((item, index) => (
            <li key={index}>{index + 1}. {item.toUpperCase()}</li>
          ))}
        </ul>
      </div>

      {/* Dates */}
      <p>Now: {now.toLocaleTimeString()}</p>

      {/* TODOs:
          - Change the data values and observe renders
          - Add another list and format it differently
          - Show a message only when items.length === 0
      */}
    </section>
  );
}

export default EmbeddedExpressionsExercise;


