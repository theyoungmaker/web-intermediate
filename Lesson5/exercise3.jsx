import React from 'react';

/*
  Lesson 5 — Exercise 3: Prop-driven rendering
  Objectives:
  - Accept an items array via props
  - Render a list and support an optional `emptyText` prop
  - Try it in the NextLeap React.js compiler: https://nextleap.app/online-compiler/reactjs-programming
*/

function ItemList({ items = [], emptyText = 'No items.' }) {
  const listStyle = { listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 };
  const itemStyle = { padding: '6px 10px', border: '1px solid #eee', borderRadius: 6, background: '#fff' };
  if (items.length === 0) return <p role="status">{emptyText}</p>;
  return (
    <ul style={listStyle}>
      {items.map((item, index) => (
        <li key={index} style={itemStyle}>{item}</li>
      ))}
    </ul>
  );
}

function ItemListExercise() {
  return (
    <section style={{ padding: 16, border: '1px solid #ddd', borderRadius: 8, maxWidth: 420 }}>
      <h2 style={{ marginTop: 0 }}>Exercise 3: Prop-driven list</h2>

      {/* TODO: Pass different arrays and emptyText values */}
      <ItemList items={["Apples", "Bananas", "Cherries"]} />
      <div style={{ height: 12 }} />
      <ItemList items={[]} emptyText="Nothing to show here." />

      {/* Bonus:
          - Add a `renderItem` prop to customize rendering
          - Add a `heading` prop to show a section title above the list
      */}
    </section>
  );
}

export default ItemListExercise;


