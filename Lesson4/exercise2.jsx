/*
  Lesson 4 — Exercise 2: JSX + CSS (neumorphic dashboard)
  Objectives:
  - Build a small dashboard with 3 neumorphic stat cards (e.g., Sales, Users, Uptime)
  - Use flexbox for layout and soft shadows for the neumorphic look
  - Ensure numbers and labels are legible with balanced spacing/contrast
  - Try it in the NextLeap React.js compiler: https://nextleap.app/online-compiler/reactjs-programming

  Import/export setup is intentionally not provided elsewhere — but in this repo each exercise exports a default component.
*/

import React from 'react';

function ExerciseTwoStyles() {
  const stats = [
    { label: 'Sales', value: '$12,480' },
    { label: 'Users', value: '1,234' },
    { label: 'Uptime', value: '99.98%' },
  ];

  const dashboardStyle = {
    display: 'flex',
    gap: '16px',
    padding: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    background: '#eef2ff',
  };

  const cardStyle = {
    width: '220px',
    borderRadius: '16px',
    backgroundColor: '#eef2ff',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '8px 8px 16px #c4c8e0, -8px -8px 16px #ffffff',
    padding: '16px',
  };

  const valueStyle = {
    margin: 0,
    fontSize: '1.6rem',
    fontWeight: '800',
    color: '#1e293b',
  };

  const labelStyle = {
    margin: '4px 0 0',
    fontSize: '0.9rem',
    color: '#475569',
  };

  return (
    <section>
      <h3 style={{ marginLeft: '16px' }}>Exercise 2: Neumorphic Dashboard</h3>
      <div style={dashboardStyle}>
        {/* TODO: Render 3 stat cards with a soft, neumorphic look */}
        {stats.map((s, index) => (
          <div key={index} style={cardStyle}>
            <p style={valueStyle}>{s.value}</p>
            <p style={labelStyle}>{s.label}</p>
          </div>
        ))}
      </div>
      {/* Bonus ideas:
          - Add subtle hover/active states (press-in illusion)
          - Try alt background hues (#f1f5f9 / #e2e8f0) and adjust shadows
          - Add small icons to each card using aria-hidden
      */}
    </section>
  );
}

export default ExerciseTwoStyles;


