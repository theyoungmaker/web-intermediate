import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <section style={{ padding: 16 }}>
      <h2>Home</h2>
      <p>Welcome to the router exercise.</p>
      <Link to="/about">Go to About →</Link>
    </section>
  );
}

function About() {
  return (
    <section style={{ padding: 16 }}>
      <h2>About</h2>
      <p>This is the about page.</p>
      <Link to="/">← Back Home</Link>
    </section>
  );
}

function RouterBasicsSolution() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterBasicsSolution;


