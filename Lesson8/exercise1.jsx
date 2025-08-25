import React from "react";

/*
  Lesson 8 — Exercise 1: Ternary for auth state + conditional section
  Goals:
  - Use a ternary operator to switch headline content
*/

function LoginStatus() {
  // TODO: Manage `isLoggedIn` boolean with React.useState(false)
  const isLoggedIn = false;

  return (
    <section
      style={{ fontFamily: "sans-serif", textAlign: "center", padding: 16 }}
    >
      <div style={{ marginBottom: 12 }}>
        {/* TODO: setIsLoggedIn(true) */}
        <button onClick={() => {}} style={{ marginRight: 8 }}>
          Log in
        </button>
        {/* TODO: setIsLoggedIn(false) */}
        <button onClick={() => {}}>Log out</button>
      </div>

      <h1>{isLoggedIn ? "👋 Welcome back!" : "🔐 Please sign in."}</h1>

      {isLoggedIn && (
        <p style={{ color: "#0a7", marginTop: 8 }}>
          You now have access to your dashboard.
        </p>
      )}
    </section>
  );
}

export default LoginStatus;
