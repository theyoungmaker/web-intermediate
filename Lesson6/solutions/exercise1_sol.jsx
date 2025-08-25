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

function PropsBasicsSolution() {
  return (
    <section
      style={{
        padding: "16px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        maxWidth: 420,
      }}
    >
      <h2 style={{ marginTop: 0 }}>Solution: Props Basics</h2>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <Badge label="New" color="#10b981" />
        <Badge label="Sale" color="#e80c0c" />
        <Badge label="Warning" color="#f59e0b" />
        <Badge />
      </div>
    </section>
  );
}

export default PropsBasicsSolution;
