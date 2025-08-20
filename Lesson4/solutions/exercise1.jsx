import React from 'react';

function ExerciseOneStylesSolution() {
  const movie = {
    title: 'The Lion King',
    posterUrl: 'https://placehold.co/200x300?text=Hello+World',
  };

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
      <h3 style={{ margin: '0 0 12px 16px' }}>Solution: Styled Movie Card</h3>
      <div style={containerStyle}>
        <div style={cardStyle}>
          <img src={movie.posterUrl} alt={movie.title} style={imageStyle} />
          <p style={titleStyle}>{movie.title}</p>
        </div>
      </div>
    </section>
  );
}

export default ExerciseOneStylesSolution;


