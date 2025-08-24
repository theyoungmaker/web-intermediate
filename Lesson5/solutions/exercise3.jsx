import React from 'react';

function HooksBasicsSolution() {
  const [seconds, setSeconds] = React.useState(0);
  const [running, setRunning] = React.useState(false);
  const [intervalMs, setIntervalMs] = React.useState(1000);

  React.useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSeconds((s) => s + 1), intervalMs);
    return () => clearInterval(id);
  }, [running, intervalMs]);

  React.useEffect(() => {
    document.title = running ? `⏱️ ${seconds}s` : 'Hooks Timer';
  }, [seconds, running]);

  const Section = ({ children }) => (
    <section style={{ padding: '16px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: 420 }}>
      {children}
    </section>
  );

  return (
    <Section>
      <h2 style={{ marginTop: 0 }}>Solution: Hooks Basics</h2>
      <p>Elapsed: {seconds} second{seconds === 1 ? '' : 's'}</p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
        <button onClick={() => setRunning(true)} disabled={running}>Start</button>
        <button onClick={() => setRunning(false)} disabled={!running}>Stop</button>
        <button onClick={() => setSeconds(0)} disabled={running}>Reset</button>
        <label style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          Speed
          <select value={intervalMs} onChange={(e) => setIntervalMs(Number(e.target.value))}>
            <option value={500}>0.5s</option>
            <option value={1000}>1s</option>
            <option value={2000}>2s</option>
          </select>
        </label>
      </div>
    </Section>
  );
}

export default HooksBasicsSolution;


