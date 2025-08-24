/*
  Lesson 13 — Exercise 2: Dynamic className & inline styles
  Objectives:
  - Derive multiple dynamic values (status label, color, emoji) from props
  - Apply dynamic className and style based on a computed status
  - Practice mapping numeric ranges to UI variations
*/

import React from 'react';

function ScoreBadge({ score = 0 }) {
  const status = score >= 80 ? 'great' : score >= 50 ? 'ok' : 'low';
  const color = status === 'great' ? '#16a34a' : status === 'ok' ? '#f59e0b' : '#ef4444';
  const emoji = status === 'great' ? '🏆' : status === 'ok' ? '👍' : '⚠️';

  const style = {
    display: 'inline-block',
    padding: '6px 10px',
    borderRadius: 999,
    background: '#fff',
    border: `2px solid ${color}`,
    color,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  };

  /*
    TODOs:
    - Tweak thresholds (>= 90 = excellent, >= 70 = good, else needs work)
    - Add a `size` prop ("sm" | "md" | "lg") to change padding and font size
    - Add an `showLabel` boolean prop to optionally hide the numeric score
    - Add `aria-label` describing the status for screen readers
  */

  return (
    <span className={`score-${status}`} style={style}>
      {emoji} Score: {score}
    </span>
  );
}

export default ScoreBadge;


