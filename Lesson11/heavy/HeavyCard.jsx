import React from 'react';

function HeavyCard() {
  const card = {
    border: '1px solid #ddd',
    borderRadius: 8,
    padding: 16,
    background: '#fff',
  };
  return (
    <div style={card}>
      <h3>Heavy Card</h3>
      <p>This component was lazy-loaded with an artificial delay.</p>
    </div>
  );
}

export default HeavyCard;


