import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function Users() {
  const users = ['ada', 'grace', 'linus'];
  return (
    <section style={{ padding: 16 }}>
      <h2>Users</h2>
      <ul>
        {users.map((u) => (
          <li key={u}><Link to={`/users/${u}`}>{u}</Link></li>
        ))}
      </ul>
      <Link to="/">← Back</Link>
    </section>
  );
}

function UserDetail() {
  const { id } = useParams();
  return (
    <section style={{ padding: 16 }}>
      <h2>User Detail</h2>
      <p>Selected user: <strong>{id}</strong></p>
      <Link to="/users">← Back to Users</Link>
    </section>
  );
}

function DynamicRoutesExercise() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div style={{ padding: 16 }}><Link to="/users">Go to Users →</Link></div>} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default DynamicRoutesExercise;


