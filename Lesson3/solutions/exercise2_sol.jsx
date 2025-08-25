import React from "react";

function ExerciseTwoSolution() {
  const movies = [
    { id: "m1", title: "Inception", rating: 5 },
    { id: "m2", title: "Interstellar", rating: 4 },
    { id: "m3", title: "Dune", rating: 3 },
  ];

  const [minRating, setMinRating] = React.useState(4);

  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "grid",
    gap: "8px",
  };

  const itemStyle = {
    padding: "8px 12px",
    borderRadius: "8px",
    background: "#f5f5f5",
    display: "flex",
    justifyContent: "space-between",
  };

  const filtered = movies.filter((m) => m.rating >= minRating);

  return (
    <section>
      <h3 style={{ marginBottom: "8px" }}>Top Rated (≥ {minRating})</h3>

      <label
        htmlFor="minRating"
        style={{
          display: "inline-flex",
          gap: "8px",
          alignItems: "center",
          marginBottom: "8px",
        }}
      >
        Minimum rating
        <input
          id="minRating"
          type="number"
          min={0}
          max={5}
          step={1}
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value) || 0)}
          style={{ width: "64px" }}
        />
      </label>

      {filtered.length === 0 ? (
        <h3>No movies meet the current rating threshold.</h3>
      ) : (
        <ul style={listStyle}>
          {filtered.map((movie) => (
            <li key={movie.id} style={itemStyle}>
              <span>{movie.title}</span>
              <span aria-label={`Rating ${movie.rating}`}>
                ⭐ {movie.rating}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ExerciseTwoSolution;
