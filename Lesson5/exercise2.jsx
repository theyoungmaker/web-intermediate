import React from 'react';

/*
  Lesson 5 — Exercise 2: Props with composition
  Goals:
  - Pass different content via props.children
  - Compose small presentational components together
  - Try it in the NextLeap React.js compiler: https://nextleap.app/online-compiler/reactjs-programming
*/

function Card({ title, children }) {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '12px',
    maxWidth: 360,
    background: '#fff',
  };
  const titleStyle = { margin: '0 0 8px 0', fontWeight: 'bold' };
  return (
    <div style={cardStyle}>
      {title && <h3 style={titleStyle}>{title}</h3>}
      {children}
    </div>
  );
}

function CompositionExercise() {
  return (
    <section style={{ padding: 16, display: 'grid', gap: 12 }}>
      <h2 style={{ margin: 0 }}>Exercise 2: Composition with children</h2>

      {/* TODO: Swap the children out for different content blocks */}
      <Card title="Announcement">
        <p>We launched a new feature today! 🎉</p>
      </Card>

      <Card title="Profile">
        <p><strong>Name:</strong> Sam</p>
        <p><strong>Role:</strong> Developer</p>
      </Card>

      <Card>
        <button>Standalone Button</button>
      </Card>

      {/* Bonus:
          - Add a `footer` prop and render it below children
          - Add a `variant` prop that changes background/border
      */}
    </section>
  );
}

export default CompositionExercise;


