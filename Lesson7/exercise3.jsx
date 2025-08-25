/*
  Lesson 7 — Exercise 3: Mini Todo (Skeleton)
  Objectives:
  - Use useState to manage an array of items
  - Add new items via a controlled input
  - Remove items by filtering state
*/
import React from "react";

function MiniTodo() {
  // TODO: Create state variable that is able to store an array using useState
  // TODO: Create a state variable that is able to store a string using useState

  const addItem = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setItems((prev) => [...prev, { id: Date.now(), text: trimmed }]);
    setText("");
  };

  const removeItem = (id) =>
    setItems((prev) => prev.filter((it) => it.id !== id));

  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "grid",
    gap: 8,
  };
  const itemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #eee",
    borderRadius: 6,
    padding: "6px 10px",
    background: "#fff",
  };

  return (
    <section
      style={{
        padding: 16,
        border: "1px solid #ddd",
        borderRadius: 8,
        maxWidth: 420,
      }}
    >
      <h2 style={{ marginTop: 0 }}>Mini Todo</h2>

      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        {/* TODO: Bind value to be text and onChange to set the text variable to be event.target.value */}
        <input
          value={""} // TODO: replace with text state variable
          onChange={(event) => {
            console.log(event.target.value); // TODO: replace with setText
          }}
          placeholder="Add a task"
          style={{ flex: 1 }}
        />
        {/* TODO: pass in addItem into onClick*/}
        <button onClick={() => {}}>Add</button>
      </div>

      <p role="status">No tasks yet.</p>
      {/* TODO: Conditionally render empty-state vs list of items 
                Each li item should also have a button that removes it
                using the removeItem() arrow function defined above*/}
    </section>
  );
}

export default MiniTodo;
