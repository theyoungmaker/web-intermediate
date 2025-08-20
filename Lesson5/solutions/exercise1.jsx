import React, { useEffect, useState } from 'react';

function GreetingCounterSolution({ initialName = 'Friend' }) {
  const [name, setName] = useState(initialName);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${name}: ${count} clicks`;
  }, [name, count]);

  return (
    <div
      style={{
        padding: '16px',
        border: '2px solid #007acc',
        borderRadius: '8px',
        maxWidth: '300px',
      }}
    >
      <h2>Hello, {name}!</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        style={{ marginBottom: '8px', display: 'block', width: '100%' }}
      />
      <p>
        You clicked {count} {count === 1 ? 'time' : 'times'}
      </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default GreetingCounterSolution;


