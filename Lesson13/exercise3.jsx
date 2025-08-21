/*
  Lesson 13 — Exercise 3: Dynamic lists based on props
  Objectives:
  - Accept props to control filtering/sorting
  - Compute derived arrays and render them
  - Show an empty state when no items match
*/

import React from 'react';

function ProductList({ products = [], minPrice = 0, sort = 'asc' }) {
  const filtered = products.filter((p) => p.price >= minPrice);
  const sorted = [...filtered].sort((a, b) => (sort === 'asc' ? a.price - b.price : b.price - a.price));

  if (sorted.length === 0) {
    return <p role="status">No products match the current filters.</p>;
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
      {sorted.map((p) => (
        <li key={p.id} style={{ padding: '8px 12px', border: '1px solid #eee', borderRadius: 8, background: '#fff' }}>
          <strong>{p.name}</strong> — ${p.price.toFixed(2)}
        </li>
      ))}
    </ul>
  );
}

/*
  TODOs:
  - Add a `maxPrice` prop and include it in the filter
  - Add a `renderItem` prop to customize how each product is displayed
  - Add a `highlightUnder` prop to style items under a price threshold
  - Accept a `currency` prop (e.g., "USD", "EUR") and format prices accordingly
*/

export default ProductList;


