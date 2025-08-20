import React from 'react';

function ExerciseTwoStylesSolution() {
  const movies = [
    { title: 'The Lion King', posterUrl: 'https://placehold.co/200x300?text=Hello+World' },
    { title: 'Frozen', posterUrl: 'https://placehold.co/200x300?text=Hello+World' },
    { title: 'Avengers', posterUrl: 'https://placehold.co/200x300?text=Hello+World' },
    { title: 'Toy Story', posterUrl: 'https://placehold.co/200x300?text=Hello+World' },
    { title: 'Spider-Man', posterUrl: 'https://placehold.co/200x300?text=Hello+World' },
  ];

  const galleryStyle = {
    display: 'flex',
    gap: '16px',
    overflowX: 'auto',
    padding: '16px',
  };

  const cardStyle = {
    minWidth: '150px',
    borderRadius: '12px',
    textAlign: 'center',
    backgroundColor: '#fff',
    flexShrink: 0,
    fontFamily: 'Arial, sans-serif',
    boxShadow: '5px 5px 10px #8d8d8d, -5px -5px 10px #ffffff',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
    display: 'block',
  };

  const titleStyle = {
    padding: '8px',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    color: '#333',
  };

  return (
    <section>
      <h3 style={{ marginLeft: '16px' }}>Solution: Neumorphic Gallery</h3>
      <div style={galleryStyle}>
        {movies.map((movie, index) => (
          <div key={index} style={cardStyle}>
            <img src={movie.posterUrl} alt={movie.title} style={imageStyle} />
            <p style={titleStyle}>{movie.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExerciseTwoStylesSolution;


