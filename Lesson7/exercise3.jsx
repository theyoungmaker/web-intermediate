/*
  Lesson 7 — Exercise 3: Mini Todo
  Objectives:
  - Use useState to manage an array of items
  - Add new items via a controlled input
  - Remove items by filtering state
*/
import React, { useState } from 'react';

/*
  Lesson 7 — Exercise 3: Mini Todo (array state)
  Goals:
  - Manage an array of items in state
  - Use a controlled input to add new items
  - Render a list and support simple removal
*/

function MiniTodo() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  const addItem = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setItems((prev) => [...prev, { id: Date.now(), text: trimmed }]);
    setText('');
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const listStyle = { listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 };
  const itemStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #eee', borderRadius: 6, padding: '6px 10px', background: '#fff' };

  return (
    <section style={{ padding: 16, border: '1px solid #ddd', borderRadius: 8, maxWidth: 420 }}>
      <h2 style={{ marginTop: 0 }}>Mini Todo</h2>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task"
          style={{ flex: 1 }}
        />
        <button onClick={addItem}>Add</button>
      </div>

      {items.length === 0 ? (
        <p role="status">No tasks yet.</p>
      ) : (
        <ul style={listStyle}>
          {items.map((it) => (
            <li key={it.id} style={itemStyle}>
              <span>{it.text}</span>
              <button onClick={() => removeItem(it.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default MiniTodo;


