import React from "react";

// TODO: Build a reusable List component that renders based on props
// Add in the required props and default values
function List({}) {
  // Suggested styles (optional)
  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "grid",
    gap: 8,
  };
  const itemStyle = {
    padding: "6px 10px",
    border: "1px solid #eee",
    borderRadius: 6,
    background: "#fff",
  };

  if (!items || items.length === 0) {
    return <p role="status">{emptyText}</p>;
  }

  return (
    <ul style={listStyle}>
      {items.map((item, index) => (
        <li key={index} style={itemStyle}>
          {typeof renderItem === "function"
            ? renderItem(item, index)
            : String(item)}
        </li>
      ))}
    </ul>
  );
}

export default function PropDrivenRenderingStarter() {
  const fruits = ["Apple", "Banana", "Cherry"]; // TODO: use default rendering
  const people = [
    { name: "Sam", role: "Member" },
    { name: "Ava", role: "Admin" },
  ];

  return (
    <section
      style={{
        padding: 16,
        border: "1px solid #ddd",
        borderRadius: 8,
        maxWidth: 520,
      }}
    >
      <h2 style={{ marginTop: 0 }}>Exercise: Prop-Driven Rendering</h2>

      <h3>Default item rendering</h3>
      <List items={fruits} />

      <h3 style={{ marginTop: 16 }}>
        Custom item rendering via <code>renderItem</code>
      </h3>
      <List
        items={people}
        renderItem={(p, i) => (
          <div>
            <strong>
              {i + 1}. {p.name}
            </strong>{" "}
            — <em>{p.role}</em>
          </div>
        )}
      />

      <h3 style={{ marginTop: 16 }}>
        Empty state via <code>emptyText</code>
      </h3>
      <List items={[]} emptyText="Nothing to show." />
    </section>
  );
}
