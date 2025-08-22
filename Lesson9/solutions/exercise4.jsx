import React, { useState } from 'react';

function VideoEmbedSolution() {
  const [videoKey, setVideoKey] = useState('trailer');
  const [muted, setMuted] = useState(true);
  const [loop, setLoop] = useState(false);

  const videos = {
    trailer: {
      label: 'Trailer',
      mp4: '/videos/trailer.mp4',
      webm: '/videos/trailer.webm',
      poster: '/images/poster.png',
    },
    teaser: {
      label: 'Teaser',
      mp4: '/videos/teaser.mp4',
      webm: '/videos/teaser.webm',
      poster: '/images/poster_teaser.png',
    },
  };

  const current = videos[videoKey];

  return (
    <section style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: 16 }}>
      <h2 style={{ marginTop: 0 }}>Solution: Video Embed</h2>

      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 12 }}>
        <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          Video
          <select value={videoKey} onChange={(e) => setVideoKey(e.target.value)}>
            {Object.entries(videos).map(([key, meta]) => (
              <option key={key} value={key}>{meta.label}</option>
            ))}
          </select>
        </label>

        <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <input type="checkbox" checked={muted} onChange={(e) => setMuted(e.target.checked)} />
          Muted
        </label>

        <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <input type="checkbox" checked={loop} onChange={(e) => setLoop(e.target.checked)} />
          Loop
        </label>
      </div>

      <video
        key={videoKey}
        controls
        playsInline
        muted={muted}
        loop={loop}
        poster={current.poster}
        style={{ width: '100%', maxWidth: 640, borderRadius: 8 }}
      >
        <source src={current.mp4} type="video/mp4" />
        <source src={current.webm} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

export default VideoEmbedSolution;


