import React from 'react';

function FragmentsSolution() {
  const [count, setCount] = React.useState(0);
  const [isOn, setIsOn] = React.useState(false);

  const wrapperStyle = {
    padding: '16px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    maxWidth: 420,
  };
  const controlsStyle = { display: 'flex', gap: '8px', alignItems: 'center', margin: '8px 0 12px' };
  const gridStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 12px', alignItems: 'center' };
  const labelStyle = { color: '#6b7280' };
  const valueStyle = { color: '#111827' };

  return (
    <section style={wrapperStyle}>
      <>
        <h2 style={{ marginTop: 0 }}>Solution: Hooks + Fragments</h2>

        <div style={controlsStyle}>
          <button type="button" onClick={() => setCount((c) => c - 1)}>-1</button>
          <button type="button" onClick={() => setCount((c) => c + 1)}>+1</button>
          <span>Count: <strong>{count}</strong></span>
        </div>

        <div style={controlsStyle}>
          <button type="button" onClick={() => setIsOn((v) => !v)}>Toggle</button>
          <span>Status: <strong>{isOn ? 'On' : 'Off'}</strong></span>
        </div>

        <div style={gridStyle}>
          <>
            <span style={labelStyle}>Clicks</span>
            <strong style={valueStyle}>{count}</strong>
          </>
          <>
            <span style={labelStyle}>Power</span>
            <strong style={valueStyle}>{isOn ? 'On' : 'Off'}</strong>
          </>
          <>
            <span style={labelStyle}>Status</span>
            <strong style={valueStyle}>{count % 2 === 0 ? 'Even' : 'Odd'}</strong>
          </>
        </div>
      </>
    </section>
  );
}

export default FragmentsSolution;


