import React from "react";

/*
  Lesson 8 — Exercise 3: Multi-ternary + conditional notices
  Goals:
  - Use nested ternaries to categorize a numeric value
  - Use conditional rendering to show contextual notices
*/

function TemperatureChecker() {
  // TODO: Manage `temp` number with React.useState(22)
  const temp = 22;

  // Observe how the nested ternaries work here
  // We check that temp is >= 25 first and set the value to be "hot" if it is
  // If its not, we then check if its <= 15 and set the value to be "cold" if it is
  // else it's mild
  const status = temp >= 25 ? "hot" : temp <= 15 ? "cold" : "mild";
  // We check that status is "hot" first and set the color to be red if it is
  // If its not, we then check if its "cold" and set the color to be blue if it is
  // else it's mild and we set the color to be teal
  const color =
    status === "hot" ? "#d9480f" : status === "cold" ? "#1d4ed8" : "#0f766e";
  // We check that status is "hot" first and set the label to be "🔥 Hot" if it is
  // If its not, we then check if its "cold" and set the label to be "❄️ Cold" if it is
  // else it's mild and we set the label to be "😊 Mild"
  const label =
    status === "hot" ? "🔥 Hot" : status === "cold" ? "❄️ Cold" : "😊 Mild";

  return (
    <section
      style={{ fontFamily: "sans-serif", textAlign: "center", padding: 16 }}
    >
      <div style={{ marginBottom: 12 }}>
        {/* TODO: Wire these buttons to setTemp */}
        <button onClick={() => {}} style={{ marginRight: 8 }}>
          Set Cold
        </button>
        <button onClick={() => {}} style={{ marginRight: 8 }}>
          Set Mild
        </button>
        <button onClick={() => {}}>Set Hot</button>
      </div>

      <h1 style={{ color }}>
        {label} — {temp}°C
      </h1>

      {temp >= 35 && (
        <p role="alert" style={{ color: "#b91c1c" }}>
          Heat advisory: stay hydrated!
        </p>
      )}
      {temp <= 5 && (
        <p role="alert" style={{ color: "#0c4a6e" }}>
          Freezing warning: stay warm!
        </p>
      )}
    </section>
  );
}

export default TemperatureChecker;
