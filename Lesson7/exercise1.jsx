import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      You clicked {count} {count === 1 ? 'time' : 'times'}
    </button>
  );
}

export default Counter;


