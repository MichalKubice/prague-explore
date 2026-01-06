import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '80vh',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div style={{ maxWidth: '600px' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '20px', color: '#1e293b' }}>
          Objevuj Prahu jinak
        </h2>
        <p style={{ fontSize: '1.25rem', color: '#64748b', marginBottom: '40px', lineHeight: 1.6 }}>
          Poznej všech 16 obvodů Prahy, prověř své znalosti v kvízech a staň se mistrem svého města. Začni očíslováním mapy!
        </p>
        <Link to="/map">
          <button style={{ 
            padding: '16px 40px', 
            fontSize: '1.25rem', 
            fontWeight: 'bold',
            background: '#4f46e5',
            color: 'white',
            border: 'none',
            borderRadius: '16px',
            boxShadow: '0 10px 15px -3px rgba(79, 70, 229, 0.4)',
            cursor: 'pointer'
          }}>
            Jít na mapu
          </button>
        </Link>
      </div>
    </div>
  );
}
