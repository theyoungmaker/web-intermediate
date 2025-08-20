import React, { useEffect, useState } from 'react';

function GreetingFetcherSolution() {
  const [name, setName] = useState('Friend');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const trimmed = name.trim();
    if (trimmed === '') {
      setStatus('idle');
      setGreeting('');
      return;
    }

    setStatus('loading');
    setGreeting('');

    const timeoutId = setTimeout(() => {
      // 20% chance of failure for demo
      if (Math.random() < 0.2) {
        setStatus('error');
        setGreeting('');
      } else {
        setGreeting(`Hello, ${trimmed}!`);
        setStatus('success');
      }
    }, 800);

    return () => clearTimeout(timeoutId);
  }, [name]);

  useEffect(() => {
    if (status === 'success') {
      document.title = greeting;
    }
  }, [status, greeting]);

  return (
    <section style={{ padding: '16px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: 420 }}>
      <h2 style={{ marginTop: 0 }}>Greeting Fetcher (Simulated)</h2>

      <label style={{ display: 'block', marginBottom: 8 }}>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a name"
          style={{ display: 'block', width: '100%', marginTop: 4 }}
        />
      </label>

      {status === 'idle' && <p>Type a name to fetch a greeting.</p>}
      {status === 'loading' && <p role="status">Loading…</p>}
      {status === 'success' && <p>{greeting}</p>}
      {status === 'error' && <p role="alert">Something went wrong. Try again.</p>}
    </section>
  );
}

export default GreetingFetcherSolution;


