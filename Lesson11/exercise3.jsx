import React, { Suspense } from 'react';

// Suspense wrapper for image loading
function imgResource(src) {
  const img = new Image();
  const promise = new Promise((resolve, reject) => {
    img.onload = resolve;
    img.onerror = reject;
  });
  img.src = src;
  let loaded = false;
  promise.then(() => (loaded = true));
  return {
    read() {
      if (!loaded) throw promise;
      return src;
    },
  };
}

const resource = imgResource('/images/landscape.jpg');

function SuspenseImage() {
  const src = resource.read();
  return (
    <img
      src={src}
      alt="Landscape"
      style={{ width: '100%', maxWidth: 480, borderRadius: 8, display: 'block', margin: '0 auto' }}
    />
  );
}

function SuspenseImageExercise() {
  return (
    <section style={{ padding: 16, border: '1px solid #ddd', borderRadius: 8 }}>
      <h2 style={{ marginTop: 0 }}>Exercise 3: Suspense for images</h2>
      <Suspense fallback={<div style={{ padding: 12, textAlign: 'center' }}>Loading image…</div>}>
        <SuspenseImage />
      </Suspense>
    </section>
  );
}

export default SuspenseImageExercise;


