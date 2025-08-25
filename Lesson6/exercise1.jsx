/*
  Lesson 6 — Exercise 1: Props basics
  Goals:
  - Create a small presentational component that receives data via props
  - Practice default values and prop usage in JSX
  - Try it in the NextLeap React.js compiler: https://nextleap.app/online-compiler/reactjs-programming

  Each exercise in this repo exports a default component.
*/

import React from "react";

function Badge({ label = "Default", color = "#007acc", textColor = "#fff" }) {
  const style = {
    display: "inline-block",
    padding: "4px 8px",
    borderRadius: "999px",
    background: color,
    color: textColor,
    fontWeight: "bold",
  };
  return <span style={style}>{label}</span>;
}

function PropsBasicsExercise() {
  return (
    <section
      style={{
        padding: "16px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        maxWidth: 420,
      }}
    >
      <h2 style={{ marginTop: 0 }}>Exercise 1: Props Basics</h2>

      {/* TODO: Update the props below to see different outputs
                New: #10b981
                Sale: #e80c0c
                Warning: #f59e0b */}

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Badge label="New" />
        <Badge label="Sale" />
        <Badge label="Warning" />
        <Badge />
      </div>

      {/* Bonus:
          - Add a `size` prop ("sm" | "md" | "lg") that changes padding/fontSize
          - Add a `border` prop to optionally draw an outline around the badge
      */}
    </section>
  );
}

export default PropsBasicsExercise;
