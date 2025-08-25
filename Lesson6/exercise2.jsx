/*
  Lesson 6 — Exercise 2: Props with composition
  Objectives:
  - Pass different content via props.children
  - Compose small presentational components together
  - Try it in the NextLeap React.js compiler: https://nextleap.app/online-compiler/reactjs-programming

  Each exercise in this repo exports a default component.
*/

import React from "react";

function Panel({ title, children, footer }) {
  const panelStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    background: "#fff",
    overflow: "hidden",
    maxWidth: 480,
  };
  const headerStyle = {
    margin: 0,
    padding: "12px 16px",
    borderBottom: "1px solid #eee",
    fontWeight: "bold",
  };
  const bodyStyle = { padding: "12px 16px" };
  const footerStyle = {
    padding: "10px 16px",
    borderTop: "1px solid #eee",
    background: "#fafafa",
  };
  return (
    <div style={panelStyle}>
      {title && <h3 style={headerStyle}>{title}</h3>}
      <div style={bodyStyle}>{children}</div>
      {footer && <div style={footerStyle}>{footer}</div>}
    </div>
  );
}

function CompositionPropsExercise() {
  return (
    <section style={{ padding: 16, display: "grid", gap: 12 }}>
      <h2 style={{ marginTop: 0 }}>Exercise 2: Composition with props</h2>

      {/* TODO: Replace children and footer with your own content */}
      <Panel title="Insert Your own title" footer={<em>Posted today</em>}>
        {""}
        {/*TODO: Add a children component here*/}
      </Panel>

      <Panel title="Profile"></Panel>

      {/*TODO: Add a button with "Close" text to the footer by passing in the correct props*/}
      <Panel>This panel has only body and footer.</Panel>

      {/* Bonus Challenges:
          - Add a `variant` prop (e.g., "info", "warning") that changes border/background
          - Add an `icon` prop shown beside the title
      */}
    </section>
  );
}

export default CompositionPropsExercise;
