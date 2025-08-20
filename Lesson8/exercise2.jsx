import React, { useState } from 'react';

/*
  Lesson 8 — Exercise 2: Ternary for auth state + conditional section
  Goals:
  - Use a ternary operator to switch headline content
  - Use short-circuit (&&) to conditionally render extra content
*/

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <section style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: 16 }}>
      <div style={{ marginBottom: 12 }}>
        <button onClick={() => setIsLoggedIn(true)} style={{ marginRight: 8 }}>
          Log in
        </button>
        <button onClick={() => setIsLoggedIn(false)}>
          Log out
        </button>
      </div>

      <h1>{isLoggedIn ? '👋 Welcome back!' : '🔐 Please sign in.'}</h1>

      {isLoggedIn && (
        <p style={{ color: '#0a7', marginTop: 8 }}>
          You now have access to your dashboard.
        </p>
      )}
    </section>
  );
}

export default LoginStatus;


