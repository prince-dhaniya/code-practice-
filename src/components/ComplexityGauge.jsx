import React from 'react';

const ComplexityGauge = ({ title, value, color, description }) => {
  const getPercentage = (val) => {
    switch(val) {
      case 'O(1)': return 95;
      case 'O(log n)': return 85; 
      case 'O(n)': return 75;
      case 'O(n log n)': return 60;
      case 'O(n²)': return 40;
      case 'O(n³)': return 20;
      case 'O(2^n)': return 10;
      default: return 50;
    }
  };

  const pct = getPercentage(value);
  const r = 24; 
  const c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', background: 'var(--bg-main)', padding: '0.6rem', borderRadius: '8px', border: '1px solid var(--border-default)' }}>
      <div style={{ position: 'relative', width: '56px', height: '56px' }}>
        <svg width="56" height="56" viewBox="0 0 60 60" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx="30" cy="30" r={r} fill="transparent" stroke="var(--bg-main)" strokeWidth="6" />
          <circle 
            cx="30" cy="30" r={r} 
            fill="transparent" 
            stroke={color} 
            strokeWidth="5" 
            strokeDasharray={c} 
            strokeDashoffset={offset} 
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 1s ease-out' }}
          />
        </svg>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-heading)', fontSize: '0.75rem', fontWeight: 'bold' }}>
          {value}
        </div>
      </div>
      <div>
        <h4 style={{ margin: '0 0 0.2rem 0', color: 'var(--text-heading)', fontSize: '0.8rem' }}>{title}</h4>
        <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.7rem', lineHeight: '1.4' }}>{description}</p>
      </div>
    </div>
  );
};

export default ComplexityGauge;
