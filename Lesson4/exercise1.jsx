/*
  Lesson 4 — Exercise 1: JSX + CSS (style objects)
  Objectives:
  - Build a single movie card using JSX
  - Apply styles via JS style objects (no external CSS required)
  - Practice spacing, borders, shadows, and typography
  - Try it in the NextLeap React.js compiler: https://nextleap.app/online-compiler/reactjs-programming

  Import/export setup is intentionally not provided elsewhere — but in this repo each exercise exports a default component.
*/

import React from 'react';

function ExerciseOneStyles() {
  const movie = {
    title: 'The Lion King',
    posterUrl: 'https://placehold.co/200x300?text=Hello+World',
  };

  // TODO: Adjust these styles (colors, spacing, font family) to your taste
  const cardStyle = {
    minWidth: '180px',
    border: '1px solid #ccc',
    borderRadius: '12px',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '2px 2px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    display: 'block',
  };

  const titleStyle = {
    padding: '10px 12px',
    fontWeight: 'bold',
    fontSize: '1rem',
    color: '#333',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '16px',
  };

  return (
    <section>
      <h3 style={{ margin: '0 0 12px 16px' }}>Exercise 1: Styled Movie Card</h3>
      <div style={containerStyle}>
        {/* TODO: Wrap the poster and title in a styled card */}
        <div style={cardStyle}>
          <img src={movie.posterUrl} alt={movie.title} style={imageStyle} />
          <p style={titleStyle}>{movie.title}</p>
        </div>
      </div>
      {/* Bonus ideas:
          - Add padding around the image via a wrapper
          - Try a different border radius and shadow
          - Experiment with a subtle gradient background on the card
      */}
    </section>
  );
}

export default ExerciseOneStyles;


