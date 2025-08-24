import React from 'react';

function ScoreBadgeSolution({ score = 0 }) {
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

  return (
    <span className={`score-${status}`} style={style}>
      {emoji} Score: {score}
    </span>
  );
}

export default ScoreBadgeSolution;


