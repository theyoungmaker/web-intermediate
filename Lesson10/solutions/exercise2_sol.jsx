import React, { Suspense } from 'react';

function createResource(promise) {
  let status = 'pending';
  let result;
  const suspender = promise.then(
    (r) => {
      status = 'success';
      result = r;
    },
    (e) => {
      status = 'error';
      result = e;
    }
  );
  return {
    read() {
      if (status === 'pending') throw suspender;
      if (status === 'error') throw result;
      return result;
    },
  };
}

function fetchGreeting(name) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ message: `Hello, ${name}!` }), 1000);
  });
}

const greetingResource = (name) => createResource(fetchGreeting(name));

function Greeting({ resource }) {
  const data = resource.read();
  return <h3>{data.message}</h3>;
}

function SuspenseDataSolution() {
  const resource = greetingResource('Learner');
  return (
    <section style={{ padding: 16, border: '1px solid #ddd', borderRadius: 8, maxWidth: 540 }}>
      <h2 style={{ marginTop: 0 }}>Solution: Suspense for data</h2>
      <Suspense fallback={<div>Loading greeting…</div>}>
        <Greeting resource={resource} />
      </Suspense>
    </section>
  );
}

export default SuspenseDataSolution;


