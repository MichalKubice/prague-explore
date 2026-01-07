import { useState } from 'react';
import type { UserProgress } from '../types';
import { progressService } from '../services/progressService';

interface NumberingControllerProps {
  progress: UserProgress;
  totalZones: number;
  onUpdate: (newProgress: UserProgress) => void;
  onComplete: () => void;
}

export function NumberingController({ progress, totalZones, onUpdate, onComplete }: NumberingControllerProps) {
  const numbering = progress.numbering || { currentNumber: 1, livesLeft: 5 };
  const { currentNumber, livesLeft } = numbering;
  const [showFinishedModal, setShowFinishedModal] = useState(false);

  const handleUnlockQuizzes = () => {
    const newProgress = progressService.unlockQuizzes();
    onUpdate(newProgress);
    onComplete();
  };

  const maxLives = 5;
  const hearts = '❤️'.repeat(Math.max(0, Math.min(maxLives, livesLeft)));
  const emptyHearts = '🖤'.repeat(Math.max(0, maxLives - livesLeft));

  if (currentNumber > totalZones && !showFinishedModal) {
    setShowFinishedModal(true);
  }

  return (
    <>
      <div style={{
        padding: '20px',
        background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
        borderRadius: '24px',
        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)',
        border: '1px solid #f3f4f6',
        marginBottom: '32px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative background element */}
        <div style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '100px',
          height: '100px',
          background: '#4f46e5',
          opacity: 0.03,
          borderRadius: '50%'
        }} />

        <div style={{ flex: '1 1 300px' }}>
          <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800, color: '#111827', letterSpacing: '-0.025em' }}>
            {progress.testMode ? 'Odhalování' : 'Objevování Prahy'}
          </h2>
          <p style={{ margin: '4px 0 0', color: '#6b7280', fontSize: '0.85rem' }}>
            Klikni na libovolnou část mapy a odhal ji správným názvem.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {!progress.testMode && (
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: '#6b7280', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', fontWeight: 600 }}>
                Aktuální cíl
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#4f46e5', lineHeight: 1 }}>
                Praha {currentNumber > totalZones ? '✔' : currentNumber}
              </div>
            </div>
          )}

          <div style={{ 
            padding: '10px 16px', 
            background: livesLeft === 1 ? '#fef2f2' : '#f0f9ff',
            borderRadius: '12px',
            textAlign: 'center',
            minWidth: '100px',
            border: `1px solid ${livesLeft === 1 ? '#fecaca' : '#e0f2fe'}`
          }}>
            <div style={{ color: livesLeft === 1 ? '#dc2626' : '#0369a1', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
              Životy
            </div>
            <div style={{ fontSize: '1.1rem', display: 'flex', gap: '4px', justifyContent: 'center' }}>
              {hearts}
              {emptyHearts}
            </div>
          </div>
        </div>
      </div>

      {showFinishedModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: '#fff',
            padding: '40px',
            borderRadius: '16px',
            textAlign: 'center',
            maxWidth: '400px',
            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'
          }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>🎉 Hotovo!</h2>
            <p style={{ color: '#4b5563', marginBottom: '32px' }}>
              Úspěšně jsi očísloval všechny části Prahy. Nyní se ti odemkly kvízy pro jednotlivé zóny.
            </p>
            <button
              onClick={handleUnlockQuizzes}
              style={{
                width: '100%',
                padding: '12px',
                background: '#4f46e5',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Přejít ke kvízům
            </button>
          </div>
        </div>
      )}
    </>
  );
}
