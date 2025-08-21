/*
  Lesson 7 — Exercise 2: Toggle Visibility
  Objectives:
  - Manage a boolean state with useState
  - Toggle state via button click
  - Conditionally render content using &&
*/
import React, { useState } from 'react';

/*
  Lesson 7 — Exercise 2: Toggle visibility (state boolean)
  Goals:
  - Manage a boolean state to show/hide content
  - Practice event handlers and conditional rendering
*/

function ToggleVisibility() {
  const [visible, setVisible] = useState(false);

  return (
    <section style={{ padding: 16, border: '1px solid #ddd', borderRadius: 8, maxWidth: 420 }}>
      <h2 style={{ marginTop: 0 }}>Toggle Visibility</h2>
      <button onClick={() => setVisible((v) => !v)}>
        {visible ? 'Hide' : 'Show'} details
      </button>
      {visible && (
        <p style={{ marginTop: 12 }}>
          These are some details controlled by a boolean state.
        </p>
      )}
    </section>
  );
}

export default ToggleVisibility;


