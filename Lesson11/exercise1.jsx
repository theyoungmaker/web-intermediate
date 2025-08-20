import React, { Suspense } from 'react';

// Simulate a heavy component with an artificial delay
const HeavyCard = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import('./heavy/HeavyCard.jsx')), 1200);
    })
);

function SuspenseLazyExercise() {
  return (
    <section style={{ padding: 16, border: '1px solid #ddd', borderRadius: 8, maxWidth: 540 }}>
      <h2 style={{ marginTop: 0 }}>Exercise 1: Suspense + lazy()</h2>
      <p>Below card is code-split and loaded on demand.</p>

      <Suspense fallback={<div style={{ padding: 12 }}>Loading card…</div>}>
        <HeavyCard />
      </Suspense>

      {/* Bonus:
          - Mount/unmount HeavyCard via a button to re-trigger the fallback
          - Lazy-load multiple components within separate Suspense boundaries
      */}
    </section>
  );
}

export default SuspenseLazyExercise;


