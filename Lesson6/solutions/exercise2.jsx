import React from 'react';

function Panel({ title, children, footer }) {
  const panelStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    background: '#fff',
    overflow: 'hidden',
    maxWidth: 480,
  };
  const headerStyle = { margin: 0, padding: '12px 16px', borderBottom: '1px solid #eee', fontWeight: 'bold' };
  const bodyStyle = { padding: '12px 16px' };
  const footerStyle = { padding: '10px 16px', borderTop: '1px solid #eee', background: '#fafafa' };
  return (
    <div style={panelStyle}>
      {title && <h3 style={headerStyle}>{title}</h3>}
      <div style={bodyStyle}>{children}</div>
      {footer && <div style={footerStyle}>{footer}</div>}
    </div>
  );
}

function CompositionPropsSolution() {
  return (
    <section style={{ padding: 16, display: 'grid', gap: 12 }}>
      <h2 style={{ marginTop: 0 }}>Solution: Composition with props</h2>

      <Panel title="Announcement" footer={<em>Posted today</em>}>
        We launched a new feature! 🎉
      </Panel>

      <Panel title="Profile">
        <p><strong>Name:</strong> Jordan</p>
        <p><strong>Role:</strong> Designer</p>
      </Panel>

      <Panel footer={<button>Close</button>}>
        This panel has only body and footer.
      </Panel>
    </section>
  );
}

export default CompositionPropsSolution;


