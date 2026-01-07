import { useState, useMemo } from 'react';
import type { Question } from '../types';
import { progressService } from '../services/progressService';
import { QuestionCard } from './questions/QuestionCard';
import { MultipleChoiceQuestionView } from './questions/MultipleChoiceQuestionView';
import { TrueFalseQuestionView } from './questions/TrueFalseQuestionView';

interface QuizRunnerProps {
  zoneId: string;
  questions: Question[];
  onFinish: (score: number) => void;
  onCancel: () => void;
}

export function QuizRunner({ zoneId, questions, onFinish, onCancel }: QuizRunnerProps) {
  // Pick 5 random questions, prefer un-answered
  const selectedQuestions = useMemo(() => {
    const progress = progressService.loadProgress();
    const answeredIds = Object.keys(progress.quizzes.answeredQuestionIds);
    
    const unAnswered = questions.filter(q => !answeredIds.includes(q.id));
    const alreadyAnswered = questions.filter(q => answeredIds.includes(q.id));
    
    let selected: Question[] = [];
    if (unAnswered.length >= 5) {
      selected = [...unAnswered].sort(() => 0.5 - Math.random()).slice(0, 5);
    } else {
      selected = [...unAnswered];
      const remainingCount = 5 - unAnswered.length;
      const extra = [...alreadyAnswered].sort(() => 0.5 - Math.random()).slice(0, Math.min(remainingCount, alreadyAnswered.length));
      selected = [...selected, ...extra];
    }
    return selected;
  }, [zoneId, questions]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [isAnswered, setIsAnswered] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const handleAnswer = (answer: any) => {
    if (isAnswered) return;

    const question = selectedQuestions[currentIndex];
    let isCorrect = false;

    if (question.type === 'multiple_choice') {
      isCorrect = question.correctIndex === answer;
    } else {
      isCorrect = question.correct === answer;
    }

    setAnswers(prev => ({ ...prev, [question.id]: isCorrect }));
    if (isCorrect) setCurrentScore(s => s + 1);
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentIndex < selectedQuestions.length - 1) {
      setCurrentIndex(i => i + 1);
      setIsAnswered(false);
    } else {
      setShowSummary(true);
    }
  };

  const handleFinish = () => {
    progressService.recordQuizResult(zoneId, currentScore, answers);
    onFinish(currentScore);
  };

  if (showSummary) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', background: '#f0f9ff', borderRadius: '16px', border: '2px solid #bae6fd' }}>
        <h2 style={{ color: '#0369a1', marginTop: 0 }}>Kvíz dokončen!</h2>
        <div style={{ fontSize: '3rem', fontWeight: 'bold', margin: '20px 0', color: '#0ea5e9' }}>
          {currentScore} / {selectedQuestions.length}
        </div>
        <p style={{ color: '#0369a1', fontSize: '1.1rem', marginBottom: '30px' }}>
          {currentScore === selectedQuestions.length ? 'Geniální! Jsi mistr této zóny.' : 
           currentScore >= 3 ? 'Skvělá práce!' : 'Nebylo to špatné, zkus to příště ještě lépe.'}
        </p>
        <button
          onClick={handleFinish}
          style={{
            padding: '12px 32px',
            background: '#0ea5e9',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Uložit skóre a ukončit
        </button>
      </div>
    );
  }

  const question = selectedQuestions[currentIndex];

  return (
    <div style={{ padding: '0', background: '#fff', borderRadius: '16px', color: '#1e293b' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <span style={{ fontSize: '0.8rem', color: '#6b7280', fontWeight: 'bold' }}>
          Otázka {currentIndex + 1} z {selectedQuestions.length}
        </span>
        <button 
          onClick={onCancel}
          style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '0.8rem', padding: '4px' }}
        >
          Ukončit
        </button>
      </div>

      <div style={{ height: '4px', background: '#f3f4f6', borderRadius: '2px', marginBottom: '24px' }}>
        <div style={{ 
          height: '100%', 
          width: `${((currentIndex + 1) / selectedQuestions.length) * 100}%`, 
          background: '#0ea5e9', 
          borderRadius: '2px',
          transition: 'width 0.3s ease'
        }} />
      </div>

      <QuestionCard
        prompt={question.prompt}
        explanation={question.explanation}
        isAnswered={isAnswered}
        isCorrect={answers[question.id]}
        onNext={handleNext}
      >
        {question.type === 'multiple_choice' ? (
          <MultipleChoiceQuestionView 
            question={question} 
            onAnswer={handleAnswer} 
            disabled={isAnswered}
            selectedIndex={null} 
          />
        ) : (
          <TrueFalseQuestionView 
            question={question} 
            onAnswer={handleAnswer} 
            disabled={isAnswered}
            selectedAnswer={null}
          />
        )}
      </QuestionCard>
    </div>
  );
}
