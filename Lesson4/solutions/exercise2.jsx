import React from 'react';

function ExerciseTwoStylesSolution() {
  const stats = [
    { label: 'Sales', value: '$12,480' },
    { label: 'Users', value: '1,234' },
    { label: 'Uptime', value: '99.98%' },
  ];

  const dashboardStyle = {
    display: 'flex',
    gap: '16px',
    padding: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    background: '#eef2ff',
  };

  const cardStyle = {
    width: '220px',
    borderRadius: '16px',
    backgroundColor: '#eef2ff',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '8px 8px 16px #c4c8e0, -8px -8px 16px #ffffff',
    padding: '16px',
  };

  const valueStyle = {
    margin: 0,
    fontSize: '1.6rem',
    fontWeight: '800',
    color: '#1e293b',
  };

  const labelStyle = {
    margin: '4px 0 0',
    fontSize: '0.9rem',
    color: '#475569',
  };

  return (
    <section>
      <h3 style={{ marginLeft: '16px' }}>Solution: Neumorphic Dashboard</h3>
      <div style={dashboardStyle}>
        {stats.map((s, index) => (
          <div key={index} style={cardStyle}>
            <p style={valueStyle}>{s.value}</p>
            <p style={labelStyle}>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExerciseTwoStylesSolution;


