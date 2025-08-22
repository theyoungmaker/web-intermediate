/*
  Lesson 7 — Exercise 3: Mini Todo (Skeleton)
  Objectives:
  - Use useState to manage an array of items
  - Add new items via a controlled input
  - Remove items by filtering state
*/
import React from 'react';

function MiniTodo() {
  // TODO: Manage an array of items and a controlled text input
  // const [items, setItems] = React.useState([]);
  // const [text, setText] = React.useState('');

  // const addItem = () => { /* add trimmed text as an item, then clear */ };
  // const removeItem = (id) => { /* filter out by id */ };

  const listStyle = { listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 };
  const itemStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #eee', borderRadius: 6, padding: '6px 10px', background: '#fff' };

  return (
    <section style={{ padding: 16, border: '1px solid #ddd', borderRadius: 8, maxWidth: 420 }}>
      <h2 style={{ marginTop: 0 }}>Mini Todo</h2>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {/* TODO: Bind value and onChange to make this a controlled input */}
        <input
          value={''}
          onChange={() => {}}
          placeholder="Add a task"
          style={{ flex: 1 }}
        />
        {/* TODO: Wire up addItem */}
        <button onClick={() => {}}>Add</button>
      </div>

      {/* TODO: Conditionally render empty-state vs list of items */}
      <p role="status">No tasks yet.</p>
      {/* <ul style={listStyle}>
        {items.map((it) => (
          <li key={it.id} style={itemStyle}>
            <span>{it.text}</span>
            <button onClick={() => removeItem(it.id)}>Remove</button>
          </li>
        ))}
      </ul> */}
    </section>
  );
}

export default MiniTodo;


