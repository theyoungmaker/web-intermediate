import React from 'react';

function ExerciseThreeSolution() {
  const movies = [
    { id: 'tt1375666', title: 'Inception' },
    { id: 'tt0816692', title: 'Interstellar' },
    { id: 'tt0111161', title: 'The Shawshank Redemption' },
    { id: 'tt0068646', title: 'The Godfather' },
  ];

  const [query, setQuery] = React.useState('');

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'grid',
    gap: '8px',
  };

  const itemStyle = {
    padding: '8px 12px',
    borderRadius: '8px',
    background: '#f5f5f5',
    display: 'flex',
    justifyContent: 'space-between',
  };

  const normalizedQuery = query.trim().toLowerCase();
  const filtered = movies.filter((m) =>
    m.title.toLowerCase().includes(normalizedQuery)
  );

  return (
    <section>
      <h3 style={{ marginBottom: '8px' }}>Movie Search</h3>

      <input
        placeholder="Type to filter…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginBottom: '8px', padding: '6px 8px', width: '100%' }}
        aria-label="Filter movies by title"
      />

      <p style={{ margin: '8px 0' }}>Matches: {filtered.length}</p>

      {filtered.length === 0 ? (
        <p role="status">No results. Try a different search.</p>
      ) : (
        <ul style={listStyle}>
          {filtered.map((movie) => (
            <li key={movie.id} style={itemStyle}>
              <span>{movie.title}</span>
              <span aria-hidden="true">🎬</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ExerciseThreeSolution;


