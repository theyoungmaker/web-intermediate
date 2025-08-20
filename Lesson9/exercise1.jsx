import React, { useState } from 'react';

function TrailerToggle() {
  // State: are we showing the video?
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      {/* Poster image or video trailer */}
      {isPlaying ? (
        <video
          src="/videos/trailer.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ width: '100%', borderRadius: '8px' }}
        />
      ) : (
        <img
          src="/images/poster.png"
          alt="Movie Poster"
          style={{ width: '100%', borderRadius: '8px' }}
        />
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        style={{
          marginTop: '12px',
          padding: '8px 16px',
          fontSize: '16px',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        {isPlaying ? 'Show Poster' : 'Play Trailer'}
      </button>
    </div>
  );
}

export default TrailerToggle;


