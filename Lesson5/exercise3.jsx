import React from "react";

/*
  Lesson 5 — Exercise 3: React Hooks
  Objectives:
  - Use useState and useEffect to build an interactive timer
  - Practice start/stop/reset patterns with effects and cleanups
  - Try it in the NextLeap React.js compiler: https://nextleap.app/online-compiler/reactjs-programming
*/

function HooksBasicsExercise() {
  const [seconds, setSeconds] = React.useState(0);
  const [running, setRunning] = React.useState(false);

  React.useEffect(() => {
    if (!running) return;
    /** TODO: Update the seconds to increment by 1 each time the 1 second passes
     *        Read up on setInterval and clearInterval: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
     */
    const id = setInterval();
    return () => clearInterval(id);
  }, [running]);

  React.useEffect(() => {
    document.title = running ? `⏱️ ${seconds}s` : "Hooks Timer";
  }, [seconds, running]);

  return (
    <section
      style={{
        padding: 16,
        border: "1px solid #ddd",
        borderRadius: 8,
        maxWidth: 420,
      }}
    >
      <h2 style={{ marginTop: 0 }}>Exercise 3: Hooks Basics</h2>
      <p>
        Elapsed: {seconds} second{seconds === 1 ? "" : "s"}
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => setRunning(true)} disabled={running}>
          Start
        </button>
        <button onClick={() => setRunning(false)} disabled={!running}>
          Stop
        </button>
        <button onClick={() => setSeconds(0)}>Reset</button>
      </div>

      {/* Bonus Challenges:
          - Add a speed control (500ms / 1000ms / 2000ms)
          - Add a lap list using an array state
          - Disable Reset while running
      */}
    </section>
  );
}

export default HooksBasicsExercise;
