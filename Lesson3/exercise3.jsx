/*
  Exercise 3: Controlled input and derived filtering
  Objectives:
  - Add a text input to filter items by title (case-insensitive)
  - Show a live count of matches
  - Render a fallback message when nothing matches
  - Try it in the NextLeap React.js compiler: https://nextleap.app/online-compiler/reactjs-programming

  Import/export setup is intentionally not provided here — figuring that out is part of the challenge.
*/

/* eslint-disable no-unused-vars */
function ExerciseThree() {
  const movies = [
    { id: 'tt1375666', title: 'Inception' },
    { id: 'tt0816692', title: 'Interstellar' },
    { id: 'tt0111161', title: 'The Shawshank Redemption' },
    { id: 'tt0068646', title: 'The Godfather' },
  ];

  // TODO: Turn `query` into component state and control it with an <input />
  // Example next step:
  // const [query, setQuery] = React.useState('');
  // <input value={query} onChange={(e) => setQuery(e.target.value)} />
  const query = '';

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

      {/* TODO: Render an <input /> bound to state here to update `query` */}
      {/* <input placeholder="Type to filter…" value={query} onChange={(e) => setQuery(e.target.value)} /> */}

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

      {/* Bonus ideas:
          - Highlight matching query text within titles
          - Debounce input updates for performance
          - Add a clear button to reset the search
          - Try this in the NextLeap compiler and decide your import/export setup
      */}
    </section>
  );
}

export default ExerciseThree;

