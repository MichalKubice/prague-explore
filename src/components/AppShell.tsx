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
        padding: '0 var(--container-padding)',
        height: 'var(--header-height)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)'
      }}>
        <div style={{ 
          maxWidth: '1400px', 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <PragueLogo height={32} />
          </Link>
          <nav style={{ display: 'flex', gap: '20px' }}>
            <Link to="/" style={{ color: '#64748b', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>Domů</Link>
            <Link to="/map" style={{ color: '#4f46e5', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>Mapa</Link>
          </nav>
        </div>
      </header>
      <main style={{ flex: 1, padding: '0 var(--container-padding)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
