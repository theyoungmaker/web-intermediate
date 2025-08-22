import React, { useState } from 'react';

function AudioEmbedSolution() {
  const [track, setTrack] = useState('theme');

  const tracks = {
    theme: {
      label: 'Theme',
      mp3: '/audio/theme.mp3',
      ogg: '/audio/theme.ogg',
    },
    ambient: {
      label: 'Ambient',
      mp3: '/audio/ambient.mp3',
      ogg: '/audio/ambient.ogg',
    },
  };

  const current = tracks[track];

  return (
    <section style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: 16 }}>
      <h2 style={{ marginTop: 0 }}>Solution: Audio Embed</h2>

      <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        Track
        <select value={track} onChange={(e) => setTrack(e.target.value)}>
          {Object.entries(tracks).map(([key, meta]) => (
            <option key={key} value={key}>{meta.label}</option>
          ))}
        </select>
      </label>

      <audio controls style={{ width: '100%', maxWidth: 480 }}>
        <source src={current.mp3} type="audio/mpeg" />
        <source src={current.ogg} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
}

export default AudioEmbedSolution;


