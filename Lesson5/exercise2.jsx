import React from "react";

/*
  Lesson 5 — Exercise 2: Embedded Expressions
  Objectives:
  - Embed JavaScript expressions inside JSX: arithmetic, conditionals, arrays, dates
  - Practice conditional rendering with && and ?:
  - Try it in the NextLeap React.js compiler: https://nextleap.app/online-compiler/reactjs-programming
*/

function EmbeddedExpressionsExercise() {
  const name = "Sam";
  /* TODO: Replace hardcoded `isMember` with a useState hook so 
           that the value can toggle dynamically */
  const isMember = false;
  /* TODO: Replace hardcoded `price` with a useState hook so 
           that the value can toggle dynamically */
  const price = 20.0;
  const notifications = 3;
  const items = ["Apples", "Bananas", "Cherries"];
  const now = new Date();

  {
    /* TODO: Add useEffect() that updates the price 
             based on whether the user is a member or not 
             Member: $18.00
             Non-Member: $20.00 */
  }

  const sectionStyle = {
    padding: 16,
    border: "1px solid #ddd",
    borderRadius: 8,
    maxWidth: 480,
  };
  const listStyle = { margin: "8px 0 0 16px" };

  return (
    <section style={sectionStyle}>
      <h2 style={{ marginTop: 0 }}>Exercise 2: Embedded Expressions</h2>

      {/* Basic arithmetic */}
      <p>2 + 2 = {2 + 2}</p>

      {/* Use variables */}
      <p>Hello, {name.toUpperCase()}!</p>

      {/* Conditional (ternary) */}
      {/* TODO: Add a button that will toggle the value of isMember after you have replaced
                it with a useState hook */}
      <p>{isMember ? "Member discount applied." : "Join to save 10%."}</p>

      {/* Logical && rendering */}
      {notifications > 0 && (
        <p>
          You have {notifications} new notification
          {notifications === 1 ? "" : "s"}.
        </p>
      )}

      {/* Number formatting */}
      <p>Total: ${price.toFixed(2)}</p>

      {/* Mapping arrays */}
      <div>
        <p>Uppercased items:</p>
        <ul style={listStyle}>
          {items.map((item, index) => (
            <li key={index}>
              {index + 1}. {item.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>

      {/* Dates */}
      <p>Now: {now.toLocaleTimeString()}</p>
    </section>
  );
}

export default EmbeddedExpressionsExercise;
