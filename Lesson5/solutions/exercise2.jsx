import React, { useEffect, useState } from 'react';

function IntervalCounterSolution() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [running]);

  useEffect(() => {
    document.title = running ? `⏱️ ${seconds}s` : 'Interval Counter';
  }, [seconds, running]);

  return (
    <section style={{ padding: '16px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: 360 }}>
      <h2 style={{ marginTop: 0 }}>Interval Counter</h2>
      <p>Elapsed: {seconds} second{seconds === 1 ? '' : 's'}</p>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button onClick={() => setRunning(true)} disabled={running}>Start</button>
        <button onClick={() => setRunning(false)} disabled={!running}>Stop</button>
        <button onClick={() => setSeconds(0)}>Reset</button>
      </div>
    </section>
  );
}

export default IntervalCounterSolution;


