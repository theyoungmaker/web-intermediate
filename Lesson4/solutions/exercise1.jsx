import React from 'react';

function ExerciseOneStylesSolution() {
  const profile = {
    name: 'Alex Johnson',
    role: 'Product Designer',
    avatarUrl: 'https://placehold.co/200x200?text=Avatar',
  };

  const cardStyle = {
    width: '260px',
    border: '1px solid #e5e7eb',
    borderRadius: '16px',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
    fontFamily: 'Arial, sans-serif',
    overflow: 'hidden',
  };

  const headerStyle = {
    background: 'linear-gradient(135deg, #dbeafe, #fce7f3)',
    padding: '20px 16px',
  };

  const avatarStyle = {
    width: '96px',
    height: '96px',
    borderRadius: '9999px',
    border: '3px solid #ffffff',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    objectFit: 'cover',
    display: 'block',
    margin: '0 auto',
  };

  const nameStyle = {
    margin: '12px 0 4px',
    fontWeight: 'bold',
    fontSize: '1.05rem',
    color: '#111827',
  };

  const roleStyle = {
    margin: 0,
    fontSize: '0.9rem',
    color: '#6b7280',
  };

  const bodyStyle = {
    padding: '16px',
  };

  const buttonStyle = {
    display: 'inline-block',
    marginTop: '8px',
    padding: '8px 12px',
    borderRadius: '10px',
    border: '1px solid #93c5fd',
    color: '#1e3a8a',
    backgroundColor: '#dbeafe',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '16px',
  };

  return (
    <section>
      <h3 style={{ margin: '0 0 12px 16px' }}>Solution: Profile Card</h3>
      <div style={containerStyle}>
        <div style={cardStyle}>
          <div style={headerStyle}>
            <img src={profile.avatarUrl} alt={`${profile.name} avatar`} style={avatarStyle} />
            <p style={nameStyle}>{profile.name}</p>
            <p style={roleStyle}>{profile.role}</p>
          </div>
          <div style={bodyStyle}>
            <button type="button" style={buttonStyle}>Connect</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExerciseOneStylesSolution;


