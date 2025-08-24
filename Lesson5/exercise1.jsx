/*
  Lesson 5 — Exercise 1: Hooks + Fragments
  Objectives:
  - Use React hooks (useState) to manage interactive UI state
  - Use Fragments to group multiple elements without extra DOM wrappers
  - Try it in the NextLeap React.js compiler: https://nextleap.app/online-compiler/reactjs-programming
*/

import React from 'react';

function StatRow({ label, value, labelStyle, valueStyle }) {
  // Fragment returns two siblings without adding extra DOM wrappers
  return (
    <>
      <span style={labelStyle}>{label}</span>
      <strong style={valueStyle}>{value}</strong>
    </>
  );
}

function HooksAndFragmentsExercise() {
  const [count, setCount] = React.useState(0);
  const [isOn, setIsOn] = React.useState(false);

  const wrapperStyle = {
    padding: '16px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    maxWidth: 420,
  };

  const controlsStyle = {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    margin: '8px 0 12px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '6px 12px',
    alignItems: 'center',
  };

  const labelStyle = { color: '#6b7280' };
  const valueStyle = { color: '#111827' };

  return (
    <section style={wrapperStyle}>
      <>
        <h2 style={{ marginTop: 0 }}>Exercise 1: Hooks + Fragments</h2>

        <div style={controlsStyle}>
          <button type="button" onClick={() => setCount((c) => c - 1)}>-1</button>
          <button type="button" onClick={() => setCount((c) => c + 1)}>+1</button>
          <span>Count: <strong>{count}</strong></span>
        </div>

        <div style={controlsStyle}>
          <button type="button" onClick={() => setIsOn((v) => !v)}>
            Toggle
          </button>
          <span>Status: <strong>{isOn ? 'On' : 'Off'}</strong></span>
        </div>

        {/* Stats grid uses a Fragment row to render two cells per row */}
        <div style={gridStyle}>
          <StatRow label="Clicks" value={count} labelStyle={labelStyle} valueStyle={valueStyle} />
          <StatRow label="Power" value={isOn ? 'On' : 'Off'} labelStyle={labelStyle} valueStyle={valueStyle} />
        </div>

        {/* Bonus:
            - Add another piece of state (e.g., text input) and list it in the stats
            - Convert the top-level fragment to named <React.Fragment key=...>
            - Style the buttons with inline style objects for hover/active states
        */}
      </>
    </section>
  );
}

export default HooksAndFragmentsExercise;


