import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function Tab({ label }) {
  return <div style={{ padding: 16 }}>{label} content</div>;
}

function ActiveLink({ to, children }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        padding: '8px 12px',
        borderRadius: 6,
        textDecoration: 'none',
        color: isActive ? '#fff' : '#0366d6',
        background: isActive ? '#0366d6' : 'transparent',
      })}
    >
      {children}
    </NavLink>
  );
}

function TabsExercise() {
  return (
    <BrowserRouter>
      <div style={{ padding: 16 }}>
        <nav style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
          <ActiveLink to="/tab/one">One</ActiveLink>
          <ActiveLink to="/tab/two">Two</ActiveLink>
          <ActiveLink to="/tab/three">Three</ActiveLink>
        </nav>
        <Routes>
          <Route path="/tab/one" element={<Tab label="One" />} />
          <Route path="/tab/two" element={<Tab label="Two" />} />
          <Route path="/tab/three" element={<Tab label="Three" />} />
          <Route path="*" element={<Tab label="One" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default TabsExercise;


