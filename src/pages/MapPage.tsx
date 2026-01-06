import { useState, useMemo } from 'react';
import { progressService } from '../services/progressService';
import type { UserProgress } from '../types';
import { ZONES } from '../data/zones';
import { MapView } from '../components/MapView';

export function MapPage() {
  const [progress, setProgress] = useState<UserProgress>(progressService.loadProgress());

  const discoveryPct = useMemo(() => {
    const assignedNumbers = progress.numbering?.assignedNumbers || {};
    const discoveredCount = Object.keys(assignedNumbers).length;
    return Math.round((discoveredCount / ZONES.length) * 100);
  }, [progress.numbering?.assignedNumbers]);

  const quizPct = useMemo(() => {
    const zoneQuizStats = progress.quizzes?.zoneQuizStats || {};
    const passedQuizzes = Object.values(zoneQuizStats).filter(s => s.bestScore >= 3).length;
    return Math.round((passedQuizzes / ZONES.length) * 100);
  }, [progress.quizzes?.zoneQuizStats]);

  const handleReset = () => {
    if (window.confirm('Opravdu chcete vymazat veškerý pokrok?')) {
      const newProgress = progressService.resetProgress();
      setProgress(newProgress);
      // Reload page to ensure all components reset their local state
      window.location.reload();
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      padding: '40px 20px'
    }}>
      <div style={{ 
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '40px',
          padding: '24px 32px',
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(12px)',
          borderRadius: '24px',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 10px 15px -3px rgba(0,0,0,0.1)',
          border: '1px solid rgba(255, 255, 255, 0.5)'
        }}>
          <div>
            <h1 style={{ 
              margin: 0, 
              fontSize: '1.75rem', 
              fontWeight: 900, 
              color: '#1e293b',
              letterSpacing: '-0.025em'
            }}>
              Poznej Prahu
            </h1>
            <div style={{ 
              marginTop: '4px', 
              color: '#64748b',
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ color: '#4f46e5', fontWeight: 700 }}>Level {progress.level}</span>
              </span>
              <span style={{ width: '1px', height: '14px', background: '#cbd5e1' }} />
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ color: '#6366f1', fontWeight: 600 }}>{progress.xp} XP</span>
              </span>
              <span style={{ width: '1px', height: '14px', background: '#cbd5e1' }} />
              <div style={{ display: 'flex', gap: '16px', fontSize: '0.9rem', fontWeight: 600 }}>
                <span style={{ color: '#0f172a' }}>
                  Odhaleno: <span style={{ color: '#4f46e5' }}>{discoveryPct}%</span>
                </span>
                <span style={{ color: '#0f172a' }}>
                  Kvízy: <span style={{ color: '#10b981' }}>{quizPct}%</span>
                </span>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            {/* Test Mode Toggle */}
            <div style={{ padding: '4px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', gap: '4px' }}>
              <button
                onClick={() => setProgress(progressService.toggleTestMode())}
                style={{
                  padding: '8px 16px',
                  borderRadius: '10px',
                  border: 'none',
                  background: progress.testMode ? '#475569' : '#fff',
                  color: progress.testMode ? '#fff' : '#64748b',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: !progress.testMode ? '0 1px 2px rgba(0,0,0,0.05)' : 'none'
                }}
              >
                Test Mode
              </button>
            </div>

            {progress.testMode && (
              <div style={{ padding: '4px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', gap: '4px' }}>
                <button
                  onClick={() => !progress.isExplorationMode && setProgress(progressService.toggleExplorationMode())}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '10px',
                    border: 'none',
                    background: progress.isExplorationMode ? '#4f46e5' : 'transparent',
                    color: progress.isExplorationMode ? '#fff' : '#64748b',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Odhalování
                </button>
                <button
                  onClick={() => progress.isExplorationMode && setProgress(progressService.toggleExplorationMode())}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '10px',
                    border: 'none',
                    background: !progress.isExplorationMode ? '#10b981' : 'transparent',
                    color: !progress.isExplorationMode ? '#fff' : '#64748b',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Kvíz
                </button>
              </div>
            )}

            <button 
              onClick={handleReset} 
              style={{ 
                backgroundColor: '#fff', 
                color: '#ef4444', 
                border: '1px solid #fee2e2', 
                padding: '12px 24px', 
                borderRadius: '14px',
                fontWeight: '600',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
              }}
              onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#fef2f2'; }}
              onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#fff'; }}
            >
              Resetovat hru
            </button>
          </div>
        </div>
        
        <MapView 
          zones={ZONES} 
          progress={progress}
          onProgressUpdate={setProgress}
        />
      </div>
    </div>
  );
}
