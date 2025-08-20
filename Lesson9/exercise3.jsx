import React, { useState } from 'react';

/*
  Lesson 9 — Exercise 3: Embedding audio with multiple sources
  Goals:
  - Embed audio using the <audio> element and multiple <source> formats
  - Provide basic controls and a simple track selector
  - Show a fallback message when the browser cannot play the audio
*/

function AudioEmbed() {
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
      <h2 style={{ marginTop: 0 }}>Exercise 3: Audio Embed</h2>

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

      {/* Bonus:
          - Add a cover image above the player (<img src="/images/cover.png" alt="Cover" />)
          - Add a download link as a fallback
      */}
    </section>
  );
}

export default AudioEmbed;


