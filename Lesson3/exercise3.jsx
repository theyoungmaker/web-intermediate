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
class ExerciseThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  render() {
    const movies = [
      { id: "tt1375666", title: "Inception" },
      { id: "tt0816692", title: "Interstellar" },
      { id: "tt0111161", title: "The Shawshank Redemption" },
      { id: "tt0068646", title: "The Godfather" },
    ];

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

    const normalizedQuery = this.state.query.trim().toLowerCase();
    const filtered = movies.filter((m) =>
      m.title.toLowerCase().includes(normalizedQuery)
    );

    return (
      <section>
        <h3 style={{ marginBottom: "8px" }}>Movie Search</h3>

        <input
          placeholder="Type to filter…"
          value={this.state.query}
          onChange={this.handleChange}
        />

        <p style={{ margin: "8px 0" }}>Matches: {filtered.length}</p>

        {filtered.length === 0 ? (
          <p role="status">No results. Try a different search.</p>
        ) : (
          /* TODO: Map over `filtered` array of movies to render the movies that match the search string
                 instead of just rendering a static paragraph tag as per below. */
          <ul style={listStyle}>
            <li key={1} style={itemStyle}>
              <p>Give me the correct list of filtered movies</p>
            </li>
          </ul>
        )}
      </section>
    );
  }
}

export default ExerciseThree;
