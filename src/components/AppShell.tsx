import { Link, Outlet } from 'react-router-dom';
import { PragueLogo } from './PragueLogo';

export function AppShell() {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#f8fafc'
    }}>
      <header style={{ 
        background: '#fff',
        borderBottom: '1px solid #e2e8f0',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'center',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <PragueLogo />
          </Link>
          <nav style={{ display: 'flex', gap: '24px' }}>
            <Link to="/" style={{ color: '#64748b', fontWeight: 600, textDecoration: 'none' }}>Domů</Link>
            <Link to="/map" style={{ color: '#4f46e5', fontWeight: 700, textDecoration: 'none' }}>Mapa</Link>
          </nav>
        </div>
      </header>
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}
