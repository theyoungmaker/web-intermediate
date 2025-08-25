import React from 'react';

function EmbeddedExpressionsSolution() {
  const name = 'Sam';
  const isMember = true;
  const notifications = 3;
  const price = 19.99;
  const items = ['Apples', 'Bananas', 'Cherries'];
  const now = new Date();

  const sectionStyle = { padding: '16px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: 480 };
  const listStyle = { margin: '8px 0 0 16px' };

  return (
    <section style={sectionStyle}>
      <h2 style={{ marginTop: 0 }}>Solution: Embedded Expressions</h2>

      <p>2 + 2 = {2 + 2}</p>
      <p>Hello, {name.toUpperCase()}!</p>
      <p>{isMember ? 'Member discount applied.' : 'Join to save 10%.'}</p>
      {notifications > 0 && <p>You have {notifications} new notification{notifications === 1 ? '' : 's'}.</p>}
      <p>Total: ${price.toFixed(2)}</p>
      <ul style={listStyle}>
        {items.map((item, index) => (
          <li key={index}>{index + 1}. {item.toUpperCase()}</li>
        ))}
      </ul>
      <p>Now: {now.toLocaleTimeString()}</p>
    </section>
  );
}

export default EmbeddedExpressionsSolution;


