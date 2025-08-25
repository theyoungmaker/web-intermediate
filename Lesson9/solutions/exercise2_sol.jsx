import React from 'react';

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

function AssetBannerSolution() {
  const container = { fontFamily: 'sans-serif', textAlign: 'center', padding: 16 };
  const bannerStyle = { width: '100%', maxWidth: 480, borderRadius: 8 };
  const caption = { marginTop: 8, color: '#555' };

  return (
    <section style={container}>
      <h2 style={{ marginTop: 0 }}>Solution: Image + Inline SVG</h2>
      <img src="/images/banner.jpg" alt="Promotional banner" style={bannerStyle} />
      <p style={caption}>
        Featured <InlineStarIcon /> content
      </p>
    </section>
  );
}

export default AssetBannerSolution;


