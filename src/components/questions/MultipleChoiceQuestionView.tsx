import type { MultipleChoiceQuestion } from '../../types/quiz';

interface MultipleChoiceViewProps {
  question: MultipleChoiceQuestion;
  onAnswer: (index: number) => void;
  disabled: boolean;
  selectedIndex: number | null;
}

export function MultipleChoiceQuestionView({ question, onAnswer, disabled, selectedIndex }: MultipleChoiceViewProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {question.options.map((option, index) => {
        const isSelected = selectedIndex === index;
        const isCorrect = question.correctIndex === index;
        
        let backgroundColor = '#fff';
        let borderColor = '#dee2e6';

        if (disabled) {
          if (isCorrect) {
            backgroundColor = '#d1fae5';
            borderColor = '#10b981';
          } else if (isSelected) {
            backgroundColor = '#fee2e2';
            borderColor = '#ef4444';
          }
        } else if (isSelected) {
          backgroundColor = '#e0f2fe';
          borderColor = '#0ea5e9';
        }

        return (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            disabled={disabled}
            style={{
              padding: '10px 14px',
              textAlign: 'left',
              background: backgroundColor,
              border: `2px solid ${borderColor}`,
              borderRadius: '12px',
              cursor: disabled ? 'default' : 'pointer',
              fontSize: '0.9rem',
              color: '#1e293b',
              transition: 'all 0.2s ease',
              outline: 'none'
            }}
          >
            <span style={{ marginRight: '10px', fontWeight: 'bold', color: '#666' }}>
              {String.fromCharCode(65 + index)}:
            </span>
            {option}
          </button>
        );
      })}
    </div>
  );
}
