import React, { useState } from 'react';

// Router-free variant of Lesson 14 component for online compilers without react-router-dom
function MovieGalleryPage() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const movies = [
    { title: 'The Lion King', posterUrl: 'https://placehold.co/200x300?text=The+Lion+King', trailerUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { title: 'Frozen', posterUrl: 'https://placehold.co/200x300?text=Frozen', trailerUrl: 'https://www.w3schools.com/html/movie.mp4' },
    { title: 'Avengers', posterUrl: 'https://placehold.co/200x300?text=Avengers', trailerUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { title: 'Toy Story', posterUrl: 'https://placehold.co/200x300?text=Toy+Story', trailerUrl: 'https://www.w3schools.com/html/movie.mp4' },
    { title: 'Spider-Man', posterUrl: 'https://placehold.co/200x300?text=Spider-Man', trailerUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  ];

  const galleryStyle = { display: 'flex', gap: '16px', overflowX: 'auto', padding: '16px' };
  const cardBaseStyle = { minWidth: '200px', borderRadius: '8px', overflow: 'hidden', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.2s, border 0.2s', background: '#fff' };

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleMovies = normalizedQuery
    ? movies.filter((m) => m.title.toLowerCase().includes(normalizedQuery))
    : movies;

  return (
    <div>
      <nav style={{ display: 'flex', gap: 12, padding: 12, borderBottom: '1px solid #eee', background: selectedMovie ? '#f9fff9' : 'transparent' }}>
        <span style={{ color: '#93c5fd' }}>Home</span>
        <span style={{ color: '#93c5fd' }}>Favorites</span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search movies..."
          style={{ marginLeft: 'auto', padding: '6px 10px', borderRadius: 8, border: '1px solid #ddd', minWidth: 180 }}
        />
        <span style={{ marginLeft: 'auto', fontWeight: 600, color: selectedMovie ? '#4CAF50' : '#6b7280' }}>
          {selectedMovie ? `Selected: ${selectedMovie.title}` : 'No selection'}
        </span>
      </nav>

      <div style={galleryStyle}>
        {visibleMovies.map((movie) => {
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
                <video src={movie.trailerUrl} autoPlay muted loop style={{ width: '100%', display: 'block' }} />
              ) : (
                <img src={movie.posterUrl} alt={movie.title} style={{ width: '100%', display: 'block' }} />
              )}
              <h3>{movie.title}</h3>
            </div>
          );
        })}
      </div>

      {selectedMovie && (
        <div style={{ marginTop: '16px', padding: '12px', border: '2px solid #4CAF50', borderRadius: '8px', background: '#f9fff9' }}>
          🎉 You selected: <strong>{selectedMovie.title}</strong>
        </div>
      )}
    </div>
  );
}

export default MovieGalleryPage;


