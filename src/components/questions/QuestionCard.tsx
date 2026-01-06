import React from 'react';

interface QuestionCardProps {
  prompt: string;
  explanation?: string;
  isAnswered: boolean;
  isCorrect?: boolean;
  children: React.ReactNode;
  onNext: () => void;
}

export function QuestionCard({ prompt, explanation, isAnswered, isCorrect, children, onNext }: QuestionCardProps) {
  return (
    <div style={{ 
      padding: '20px', 
      borderRadius: '12px', 
      background: '#f8f9fa', 
      border: '1px solid #e9ecef',
      marginBottom: '20px'
    }}>
      <h3 style={{ marginTop: 0, color: '#2d3436', fontSize: '1.2em' }}>{prompt}</h3>
      
      <div style={{ marginBottom: '20px' }}>
        {children}
      </div>

      {isAnswered && (
        <div style={{ 
          marginTop: '20px', 
          padding: '15px', 
          borderRadius: '8px', 
          background: isCorrect ? '#d1fae5' : '#fee2e2',
          border: `1px solid ${isCorrect ? '#10b981' : '#ef4444'}`,
          color: isCorrect ? '#065f46' : '#991b1b'
        }}>
          <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
            {isCorrect ? '✅ Správně!' : '❌ Špatně.'}
          </div>
          {explanation && <p style={{ margin: 0, fontSize: '0.95em' }}>{explanation}</p>}
          
          <button 
            onClick={onNext}
            style={{ 
              marginTop: '15px',
              padding: '8px 16px',
              background: isCorrect ? '#10b981' : '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Další otázka
          </button>
        </div>
      )}
    </div>
  );
}
