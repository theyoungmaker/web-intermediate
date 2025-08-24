/*
  Lesson 7 — Exercise 2: Toggle Visibility (Skeleton)
  Objectives:
  - Manage a boolean state with useState
  - Toggle state via button click
  - Conditionally render content using &&
*/
import React from 'react';

function ToggleVisibility() {
  // TODO: Create `visible` boolean state, default false
  // const [visible, setVisible] = React.useState(false);
  const visible = false;

  return (
    <section style={{ padding: 16, border: '1px solid #ddd', borderRadius: 8, maxWidth: 420 }}>
      <h2 style={{ marginTop: 0 }}>Toggle Visibility</h2>
      {/* TODO: Toggle the boolean on click */}
      <button onClick={() => {/* setVisible(v => !v) */}}>
        {visible ? 'Hide' : 'Show'} details
      </button>
      {/* TODO: Render this paragraph only when visible is true */}
      {visible && (
        <p style={{ marginTop: 12 }}>
          These are some details controlled by a boolean state.
        </p>
      )}
    </section>
  );
}

export default ToggleVisibility;


