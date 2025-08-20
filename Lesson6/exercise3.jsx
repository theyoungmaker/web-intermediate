/*
  Lesson 6 — Exercise 3: Prop-driven rendering
  Goals:
  - Accept an items array via props
  - Render a list and support an optional `renderItem` prop
  - Provide an `emptyText` prop for empty state
  - Try it in the NextLeap React.js compiler: https://nextleap.app/online-compiler/reactjs-programming

  Each exercise in this repo exports a default component.
*/

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

function PropDrivenRenderingExercise() {
  const fruits = ['Apple', 'Banana', 'Cherry'];
  return (
    <section style={{ padding: 16, border: '1px solid #ddd', borderRadius: 8, maxWidth: 480 }}>
      <h2 style={{ marginTop: 0 }}>Exercise 3: Prop-driven rendering</h2>

      {/* Default rendering */}
      <List items={fruits} />

      <div style={{ height: 12 }} />

      {/* Custom rendering via renderItem */}
      <List
        items={fruits}
        renderItem={(fruit, i) => (
          <span>
            {i + 1}. <strong>{fruit}</strong>
          </span>
        )}
      />

      <div style={{ height: 12 }} />

      {/* Empty state */}
      <List items={[]} emptyText="Nothing to show." />

      {/* Bonus:
          - Add a `heading` prop to show a section title above the list
          - Add an `onItemClick` prop to handle clicks on list items
      */}
    </section>
  );
}

export default PropDrivenRenderingExercise;


