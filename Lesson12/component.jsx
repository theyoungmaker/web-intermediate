import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

function MovieGalleryPage() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const navigate = useNavigate();

  const movies = [
    { title: 'The Lion King', posterUrl: 'https://placehold.co/200x300?text=The+Lion+King', trailerUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { title: 'Frozen', posterUrl: 'https://placehold.co/200x300?text=Frozen', trailerUrl: 'https://www.w3schools.com/html/movie.mp4' },
    { title: 'Avengers', posterUrl: 'https://placehold.co/200x300?text=Avengers', trailerUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { title: 'Toy Story', posterUrl: 'https://placehold.co/200x300?text=Toy+Story', trailerUrl: 'https://www.w3schools.com/html/movie.mp4' },
    { title: 'Spider-Man', posterUrl: 'https://placehold.co/200x300?text=Spider-Man', trailerUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  ];

  const galleryStyle = { display: 'flex', gap: '16px', overflowX: 'auto', padding: '16px' };
  const cardBaseStyle = { minWidth: '200px', borderRadius: '8px', overflow: 'hidden', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.2s, border 0.2s', background: '#fff' };

  return (
    <div>
      <nav style={{ display: 'flex', gap: 12, padding: 12, borderBottom: '1px solid #eee' }}>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>

      <div style={galleryStyle}>
        {movies.map((movie) => {
          const isSelected = selectedMovie === movie;
          const isHovered = hoveredMovie === movie;
          return (
            <div
              key={movie.title}
              onClick={() => {
                setSelectedMovie(movie);
                navigate(`/movie/${encodeURIComponent(movie.title)}`);
              }}
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

function MovieDetailPage() {
  const { title } = useParams();
  const decoded = decodeURIComponent(title || '');
  return (
    <section style={{ padding: 16 }}>
      <Link to="/">← Back</Link>
      <h2 style={{ marginTop: 8 }}>Movie Detail</h2>
      <p>Title: <strong>{decoded}</strong></p>
      <p>Here you could load more details for this movie via a fetch.</p>
    </section>
  );
}

function FavoritesPage() {
  return (
    <section style={{ padding: 16 }}>
      <Link to="/">← Back</Link>
      <h2 style={{ marginTop: 8 }}>Favorites</h2>
      <p>No favorites yet. Implement this as an exercise!</p>
    </section>
  );
}

function AppWithRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieGalleryPage />} />
        <Route path="/movie/:title" element={<MovieDetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppWithRouter;


