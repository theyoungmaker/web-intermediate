import React, { useState } from 'react';

function MovieGallery() {
  // 🧠 Memory slot: which movie is selected
  const [selectedMovie, setSelectedMovie] = useState(null);

  // 🖥️ Memory slot: which movie card is being hovered
  const [hoveredMovie, setHoveredMovie] = useState(null);

  const movies = [
    {
      title: 'The Lion King',
      posterUrl: 'https://placehold.co/200x300?text=The+Lion+King',
      trailerUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
      title: 'Frozen',
      posterUrl: 'https://placehold.co/200x300?text=Frozen',
      trailerUrl: 'https://www.w3schools.com/html/movie.mp4',
    },
    {
      title: 'Avengers',
      posterUrl: 'https://placehold.co/200x300?text=Avengers',
      trailerUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
    {
      title: 'Toy Story',
      posterUrl: 'https://placehold.co/200x300?text=Toy+Story',
      trailerUrl: 'https://www.w3schools.com/html/movie.mp4',
    },
    {
      title: 'Spider-Man',
      posterUrl: 'https://placehold.co/200x300?text=Spider-Man',
      trailerUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    },
  ];

  const galleryStyle = {
    display: 'flex',
    gap: '16px',
    overflowX: 'auto',
    padding: '16px',
  };

  const cardBaseStyle = {
    minWidth: '200px',
    borderRadius: '8px',
    overflow: 'hidden',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'transform 0.2s, border 0.2s',
    background: '#fff',
  };

  return (
    <div>
      <div style={galleryStyle}>
        {movies.map((movie) => {
          const isSelected = selectedMovie === movie;
          const isHovered = hoveredMovie === movie;

          return (
            <div
              key={movie.title}
              onClick={() => setSelectedMovie(movie)}
              onMouseEnter={() => setHoveredMovie(movie)}
              onMouseLeave={() => setHoveredMovie(null)}
              style={{
                ...cardBaseStyle,
                border: isSelected ? '3px solid #4CAF50' : '1px solid #ccc',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              {isHovered ? (
                <video
                  src={movie.trailerUrl}
                  autoPlay
                  muted
                  loop
                  style={{ width: '100%', display: 'block' }}
                />
              ) : (
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  style={{ width: '100%', display: 'block' }}
                />
              )}
              <h3>{movie.title}</h3>
            </div>
          );
        })}
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


