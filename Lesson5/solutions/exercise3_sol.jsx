import React from "react";

function HooksBasicsSolution() {
  const [seconds, setSeconds] = React.useState(0);
  const [running, setRunning] = React.useState(false);

  React.useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  React.useEffect(() => {
    document.title = running ? `⏱️ ${seconds}s` : "Hooks Timer";
  }, [seconds, running]);

  const Section = ({ children }) => (
    <section
      style={{
        padding: "16px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        maxWidth: 420,
      }}
    >
      {children}
    </section>
  );

  return (
    <Section>
      <h2 style={{ marginTop: 0 }}>Solution: Hooks Basics</h2>
      <p>
        Elapsed: {seconds} second{seconds === 1 ? "" : "s"}
      </p>
      <div
        style={{
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <button onClick={() => setRunning(true)} disabled={running}>
          Start
        </button>
        <button onClick={() => setRunning(false)} disabled={!running}>
          Stop
        </button>
        <button onClick={() => setSeconds(0)} disabled={running}>
          Reset
        </button>
      </div>
    </Section>
  );
}

export default HooksBasicsSolution;
