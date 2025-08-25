import React from 'react';

function List({ items = [], renderItem, emptyText = 'No items.' }) {
  const listStyle = { listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 };
  const itemStyle = { padding: '6px 10px', border: '1px solid #eee', borderRadius: 6, background: '#fff' };
  if (items.length === 0) return <p role="status">{emptyText}</p>;
  return (
    <ul style={listStyle}>
      {items.map((item, index) => (
        <li key={index} style={itemStyle}>
          {renderItem ? renderItem(item, index) : String(item)}
        </li>
      ))}
    </ul>
  );
}

function PropDrivenRenderingSolution() {
  const fruits = ['Apple', 'Banana', 'Cherry'];
  return (
    <section style={{ padding: 16, border: '1px solid #ddd', borderRadius: 8, maxWidth: 480 }}>
      <h2 style={{ marginTop: 0 }}>Solution: Prop-driven rendering</h2>

      <List items={fruits} />

      <div style={{ height: 12 }} />

      <List
        items={fruits}
        renderItem={(fruit, i) => (
          <span>
            {i + 1}. <strong>{fruit}</strong>
          </span>
        )}
      />

      <div style={{ height: 12 }} />

      <List items={[]} emptyText="Nothing to show." />
    </section>
  );
}

export default PropDrivenRenderingSolution;


