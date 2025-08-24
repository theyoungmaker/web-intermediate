import React, { useState } from 'react';

function MovieGallery() {
  // 🧠 Memory slot: which movie is selected
  const [selectedMovie, setSelectedMovie] = useState(null);

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
    minWidth: '200px',
    borderRadius: '8px',
    overflow: 'hidden',
    textAlign: 'center',
    cursor: 'pointer', // show it's clickable
    transition: 'transform 0.2s', // animate selection
    background: '#fff',
  };

  return (
    <div>
      <div style={galleryStyle}>
        {movies.map((movie) => (
          <div
            key={movie.title}
            onClick={() => setSelectedMovie(movie)}
            style={{
              ...cardStyle,
              border: selectedMovie === movie ? '3px solid #4CAF50' : '1px solid #ccc',
              transform: selectedMovie === movie ? 'scale(1.05)' : 'scale(1)',
            }}
          >
            <img src={movie.posterUrl} alt={movie.title} style={{ width: '100%' }} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div
          style={{
            marginTop: '16px',
            padding: '12px',
            border: '2px solid #4CAF50',
            borderRadius: '8px',
            background: '#f9fff9',
          }}
        >
          🎉 You selected: <strong>{selectedMovie.title}</strong>
        </div>
      )}
    </div>
  );
}

export default MovieGallery;


