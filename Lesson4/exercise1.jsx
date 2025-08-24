/*
  Lesson 4 — Exercise 1: JSX + CSS (style objects)
  Objectives:
  - Build a single profile card using JSX (avatar, name, role, action button)
  - Apply styles via JS style objects (no external CSS required)
  - Practice spacing, borders, shadows, and typography
  - Try it in the NextLeap React.js compiler: https://nextleap.app/online-compiler/reactjs-programming

  Import/export setup is intentionally not provided elsewhere — but in this repo each exercise exports a default component.
*/

import React from 'react';

function ExerciseOneStyles() {
  const profile = {
    name: 'Alex Johnson',
    role: 'Product Designer',
    avatarUrl: 'https://placehold.co/200x200?text=Avatar',
  };

  // TODO: Adjust these styles (colors, spacing, font family) to your taste
  const cardStyle = {
    width: '260px',
    border: '1px solid #e5e7eb',
    borderRadius: '16px',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
    fontFamily: 'Arial, sans-serif',
    overflow: 'hidden',
  };

  const headerStyle = {
    background: 'linear-gradient(135deg, #dbeafe, #fce7f3)',
    padding: '20px 16px',
  };

  const avatarStyle = {
    width: '96px',
    height: '96px',
    borderRadius: '9999px',
    border: '3px solid #ffffff',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    objectFit: 'cover',
    display: 'block',
    margin: '0 auto',
  };

  const nameStyle = {
    margin: '12px 0 4px',
    fontWeight: 'bold',
    fontSize: '1.05rem',
    color: '#111827',
  };

  const roleStyle = {
    margin: 0,
    fontSize: '0.9rem',
    color: '#6b7280',
  };

  const bodyStyle = {
    padding: '16px',
  };

  const buttonStyle = {
    display: 'inline-block',
    marginTop: '8px',
    padding: '8px 12px',
    borderRadius: '10px',
    border: '1px solid #93c5fd',
    color: '#1e3a8a',
    backgroundColor: '#dbeafe',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '16px',
  };

  return (
    <section>
      <h3 style={{ margin: '0 0 12px 16px' }}>Exercise 1: Profile Card</h3>
      <div style={containerStyle}>
        {/* TODO: Build the card UI as described below. Start with the outer card. */}
        <div style={cardStyle}>
          {/* TODO: In the header, add an avatar <img> using profile.avatarUrl */}
          <div style={headerStyle}>
            {/* Placeholder text so the component renders while you implement */}
            <p style={nameStyle}>{profile.name}</p>
            <p style={roleStyle}>{profile.role}</p>
          </div>
          {/* TODO: In the body, add a primary action button (e.g., "Connect") */}
          <div style={bodyStyle}></div>
        </div>
      </div>
      {/* Bonus ideas:
          - Add social icons with hover styles
          - Try alternate gradients or a dark theme
          - Replace the button with two actions (Message / Follow)
      */}
    </section>
  );
}

export default ExerciseOneStyles;


