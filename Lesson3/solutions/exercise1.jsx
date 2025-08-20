import React from 'react';

function ExerciseOneSolution() {
  const snacks = [
    { name: 'Popcorn', emoji: '🍿' },
    { name: 'Chocolate', emoji: '🍫' },
    { name: 'Ice Cream', emoji: '🍨' },
  ];

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'grid',
    gap: '8px',
  };

  const itemStyle = {
    padding: '8px 12px',
    borderRadius: '8px',
    background: '#f5f5f5',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <section>
      <h3 style={{ marginBottom: '8px' }}>Favorite Snacks</h3>
      <ul style={listStyle}>
        {snacks.map((snack) => (
          <li key={snack.name} style={itemStyle}>
            <span aria-hidden="true" style={{ marginRight: '6px' }}>
              {snack.emoji}
            </span>
            <span>{snack.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ExerciseOneSolution;


