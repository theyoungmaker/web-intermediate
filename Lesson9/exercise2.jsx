import React from 'react';

/*
  Lesson 9 — Exercise 2: Embedding images and inline SVG
  Goals:
  - Embed a raster image (e.g., PNG/JPG) in a React component
  - Embed an inline SVG icon directly in JSX
  - Explore alt text and basic responsive styling

  Notes:
  - Replace the src below with your own asset paths (e.g., from public/)
  - You can also import local assets via bundler: 
    // Example (uncomment when you have the file):
    // import logo from '../assets/logo.png';
    // <img src={logo} alt="Logo" />
*/

function InlineStarIcon({ size = 24, color = '#f59e0b' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <path
        fill={color}
        d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2z"
      />
    </svg>
  );
}

function AssetBanner() {
  const container = { fontFamily: 'sans-serif', textAlign: 'center', padding: 16 };
  const bannerStyle = { width: '100%', maxWidth: 480, borderRadius: 8 };
  const caption = { marginTop: 8, color: '#555' };

  return (
    <section style={container}>
      <h2 style={{ marginTop: 0 }}>Exercise 2: Image + Inline SVG</h2>

      {/* TODO: Replace with your own image path or an imported asset */}
      <img src="/images/banner.jpg" alt="Promotional banner" style={bannerStyle} />

      <p style={caption}>
        Featured <InlineStarIcon /> content
      </p>

      {/* Bonus:
          - Swap the raster image for a <picture> with srcSet
          - Add an `aria-label` to the icon for screen readers
      */}
    </section>
  );
}

export default AssetBanner;


