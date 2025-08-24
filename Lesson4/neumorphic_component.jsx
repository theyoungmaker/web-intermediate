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
  flexShrink: 0,
  fontFamily: 'Arial',
  boxShadow: '5px 5px 10px #8d8d8d, -5px -5px 10px #ffffff',
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

function NeumorphicGallery() {
  const movies = [
    { title: 'The Lion King', posterUrl: 'https://placehold.co/200x300?text=Hello+World' },
    { title: 'Frozen', posterUrl: 'https://placehold.co/200x300?text=Hello+World' },
    { title: 'Avengers', posterUrl: 'https://placehold.co/200x300?text=Hello+World' },
    { title: 'Toy Story', posterUrl: 'https://placehold.co/200x300?text=Hello+World' },
    { title: 'Spider-Man', posterUrl: 'https://placehold.co/200x300?text=Hello+World' },
  ];

  return (
    <div>
      <h2 style={{ marginLeft: '16px' }}>🎬 My Movie Picks (Neumorphic)</h2>
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

export default NeumorphicGallery;


