import React, { Suspense } from 'react';

const HeavyCard = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import('../../Lesson11/heavy/HeavyCard.jsx')), 1200);
    })
);

function SuspenseLazySolution() {
  return (
    <section style={{ padding: 16, border: '1px solid #ddd', borderRadius: 8, maxWidth: 540 }}>
      <h2 style={{ marginTop: 0 }}>Solution: Suspense + lazy()</h2>
      <p>Below card is code-split and loaded on demand.</p>
      <Suspense fallback={<div style={{ padding: 12 }}>Loading card…</div>}>
        <HeavyCard />
      </Suspense>
    </section>
  );
}

export default SuspenseLazySolution;


