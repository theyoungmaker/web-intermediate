/*
  Exercise 2: Conditional rendering and filtering
  Objectives:
  - Filter a list based on a threshold
  - Render a fallback when no items match
  - Practice clean keys and minimal inline styles
  - Try it in the NextLeap React.js compiler: https://nextleap.app/online-compiler/reactjs-programming

  Import/export setup is intentionally not provided here — figuring that out is part of the challenge.
*/

/* eslint-disable no-unused-vars */
function ExerciseTwo() {
  const movies = [
    { id: 'm1', title: 'Inception', rating: 5 },
    { id: 'm2', title: 'Interstellar', rating: 4 },
    { id: 'm3', title: 'Dune', rating: 3 },
  ];

  // TODO: Turn this into state so learners can adjust it interactively
  const minRating = 4; // e.g., use a number input to change this

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

  const filtered = movies.filter((m) => m.rating >= minRating);

  return (
    <section>
      <h3 style={{ marginBottom: '8px' }}>Top Rated (≥ {minRating})</h3>

      {/* TODO: If there are no movies that meet the threshold, render a fallback message. */}
      {filtered.length === 0 ? (
        <p role="status">No movies meet the current rating threshold.</p>
      ) : (
        <ul style={listStyle}>
          {filtered.map((movie) => (
            <li key={movie.id} style={itemStyle}>
              <span>{movie.title}</span>
              <span aria-label={`Rating ${movie.rating}`}>⭐ {movie.rating}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Bonus ideas:
          - Promote `minRating` to component state and control it with an input or slider
          - Extract a <MovieRow /> subcomponent and pass props
          - Add a "clear filter" action
          - Try this in the NextLeap compiler and decide your import/export setup
      */}
    </section>
  );
}

export default ExerciseTwo


