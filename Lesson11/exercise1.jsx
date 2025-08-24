import React from 'react';​

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';​

​

function Home() {​

  return <h1>Home Page</h1>;​

}​

​

function About() {​

  return <h1>About Page</h1>;​

}​

​

function NotFound() {​

  return <h1>404 – Page Not Found</h1>;​

}​

​

export default function App() {​

  return (​

    <BrowserRouter>​

      <nav style={{ padding: '16px', background: '#f0f0f0' }}>​

        <Link to="/" style={{ marginRight: '8px' }}>Home</Link>​

        <Link to="/about">About</Link>​

      </nav>​

​

      <div style={{ padding: '16px', fontFamily: 'sans-serif' }}>​

        <Routes>​

          <Route path="/" element={<Home />} />​

          <Route path="/about" element={<About />} />​

          <Route path="*" element={<NotFound />} />​

        </Routes>​

      </div>​

    </BrowserRouter>​

  );​

}​

​