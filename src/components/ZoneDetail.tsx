import type { Zone, UserProgress } from '../types';

interface ZoneDetailProps {
  zone: Zone;
  progress: UserProgress;
  onStartQuiz: () => void;
  onClose: () => void;
}

export function ZoneDetail({ zone, progress, onStartQuiz, onClose }: ZoneDetailProps) {
  const stats = progress.quizzes.zoneQuizStats[zone.id] || { attempts: 0, bestScore: 0 };
  
  // Calculate how many questions the user has "seen" or "solved" in this zone
  const zoneQuestionIds = zone.questions.map(q => q.id);
  const solvedCount = zoneQuestionIds.filter(id => {
    const s = progress.quizzes.answeredQuestionIds[id];
    return s && s.correct > 0;
  }).length;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.6)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      zIndex: 1000,
      padding: '0',
      backdropFilter: 'blur(4px)'
    }}>
      <div style={{
        background: '#fff',
        width: '100%',
        maxWidth: '500px',
        borderTopLeftRadius: '24px',
        borderTopRightRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 -10px 25px -5px rgba(0,0,0,0.1)',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        {/* Header/Image placeholder */}
        <div style={{
          height: '120px',
          background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '20px',
          color: 'white'
        }}>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.5rem' }}>{zone.name}</h2>
            <div style={{ opacity: 0.9, fontSize: '0.85rem' }}>Pražský městský obvod</div>
          </div>
        </div>

        <div style={{ padding: '24px var(--container-padding)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
            <div style={{ background: '#f9fafb', padding: '12px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ color: '#6b7280', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Nejlepší skóre</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827' }}>{stats.bestScore} / {zone.questions.length}</div>
            </div>
            <div style={{ background: '#f9fafb', padding: '12px', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ color: '#6b7280', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Počet pokusů</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827' }}>{stats.attempts}</div>
            </div>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem' }}>
              <span style={{ color: '#374151', fontWeight: '500' }}>Objevené zajímavosti</span>
              <span style={{ color: '#6b7280' }}>{solvedCount} / {zone.questions.length}</span>
            </div>
            <div style={{ height: '6px', background: '#e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ 
                height: '100%', 
                width: `${(solvedCount / zone.questions.length) * 100}%`, 
                background: '#4f46e5',
                transition: 'width 0.5s ease-out'
              }} />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
            <button
              onClick={onClose}
              style={{
                flex: 1,
                padding: '12px',
                background: '#f3f4f6',
                color: '#374151',
                border: 'none',
                borderRadius: '12px',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              Zavřít
            </button>
            <button
              onClick={onStartQuiz}
              style={{
                flex: 2,
                padding: '12px',
                background: '#4f46e5',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 4px 6px -1px rgb(79 70 229 / 0.4)',
                fontSize: '0.9rem'
              }}
            >
              Spustit kvíz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
