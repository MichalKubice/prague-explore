import { useEffect, useState } from 'react';

export function PragueLogo() {
  const [colorIndex, setColorIndex] = useState(0);
  
  // Official Prague branding colors
  const colors = [
    '#e10613', // Red
    '#009fe3', // Blue
    '#ffed00', // Yellow
    '#009640', // Green
    '#1e293b', // Navy
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentColor = colors[colorIndex];

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '12px',
      cursor: 'pointer',
      userSelect: 'none',
      padding: '4px'
    }}>
      <div style={{
        fontSize: '1.75rem',
        fontWeight: 900,
        letterSpacing: '-0.02em',
        color: '#1e293b',
        fontFamily: "'Inter', sans-serif",
        lineHeight: 1
      }}>
        PRAHA
      </div>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '4px' 
      }}>
        <div style={{ 
          width: '28px', 
          height: '5px', 
          background: currentColor,
          transition: 'background 0.8s ease'
        }} />
        <div style={{ 
          width: '28px', 
          height: '5px', 
          background: currentColor,
          transition: 'background 0.8s ease',
          opacity: 0.6
        }} />
        <div style={{ 
          width: '28px', 
          height: '5px', 
          background: currentColor,
          transition: 'background 0.8s ease',
          opacity: 0.3
        }} />
      </div>
    </div>
  );
}
