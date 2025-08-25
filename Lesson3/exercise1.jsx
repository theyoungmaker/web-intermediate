/*
  Exercise 1: Build a simple JSX list
  Objectives:
  - Render a short list using map and keys
  - Practice accessible text (alt/aria) and inline styles
  - Try it in a playground like https://nextleap.app/online-compiler/reactjs-programming

  Import/export setup is intentionally not provided here — figuring that out is part of the challenge.
*/

/* eslint-disable no-unused-vars */
function App() {
  const snacks = [
    { name: "Popcorn", emoji: "🍿" },
    { name: "Chocolate", emoji: "🍫" },
    { name: "Ice Cream", emoji: "🍨" },
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
  };

  return (
    <section>
      <h3 style={{ marginBottom: "8px" }}>Favorite Snacks</h3>

      {/* TODO: Map over `snacks` to render the snacks list instead of listing just
      one snack. Use a stable `key`. */}
      <ul style={listStyle}>
        <li key={1} style={itemStyle}>
          <span aria-hidden="true" style={{ marginRight: "6px" }}>
            {snacks[0].emoji}
          </span>
          <span>{snacks[0].name}</span>
        </li>
      </ul>
    </section>
  );
}
export default App;
