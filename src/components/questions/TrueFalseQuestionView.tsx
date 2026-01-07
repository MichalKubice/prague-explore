import type { TrueFalseQuestion } from '../../types/quiz';

interface TrueFalseViewProps {
  question: TrueFalseQuestion;
  onAnswer: (answer: boolean) => void;
  disabled: boolean;
  selectedAnswer: boolean | null;
}

export function TrueFalseQuestionView({ question, onAnswer, disabled, selectedAnswer }: TrueFalseViewProps) {
  const options = [
    { label: 'Pravda', value: true },
    { label: 'Nepravda', value: false },
  ];

  return (
    <div style={{ display: 'flex', gap: '15px' }}>
      {options.map((opt) => {
        const isSelected = selectedAnswer === opt.value;
        const isCorrect = question.correct === opt.value;

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
            key={String(opt.value)}
            onClick={() => onAnswer(opt.value)}
            disabled={disabled}
            style={{
              flex: 1,
              padding: '12px',
              background: backgroundColor,
              border: `2px solid ${borderColor}`,
              borderRadius: '12px',
              cursor: disabled ? 'default' : 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#1e293b',
              transition: 'all 0.2s ease'
            }}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
