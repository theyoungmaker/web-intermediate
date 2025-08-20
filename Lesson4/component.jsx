import React from 'react';

const galleryStyle = {
  display: 'flex',
  gap: '16px',
  overflowX: 'auto',
  padding: '16px',
};

const cardStyle = {
  minWidth: '150px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  textAlign: 'center',
  backgroundColor: '#fff',
  boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.1)',
  flexShrink: 0,
  fontFamily: 'Arial',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
};

const titleStyle = {
  padding: '8px',
  fontWeight: 'bold',
  fontSize: '0.9rem',
  color: '#333',
};

function MovieGallery() {
  const movies = [
    { title: 'The Lion King', posterUrl: 'https://placehold.co/200x300?text=Hello+World' },
    { title: 'Frozen', posterUrl: 'https://placehold.co/200x300?text=Hello+World' },
    { title: 'Avengers', posterUrl: 'https://placehold.co/200x300?text=Hello+World' },
    { title: 'Toy Story', posterUrl: 'https://placehold.co/200x300?text=Hello+World' },
    { title: 'Spider-Man', posterUrl: 'https://placehold.co/200x300?text=Hello+World' },
  ];

  return (
    <div>
      <h2 style={{ marginLeft: '16px' }}>🎬 My Movie Picks</h2>
      <div style={galleryStyle}>
        {movies.map((movie, index) => (
          <div key={index} style={cardStyle}>
            <img src={movie.posterUrl} alt={movie.title} style={imageStyle} />
            <p style={titleStyle}>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieGallery;


