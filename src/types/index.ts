import type { Question } from './quiz';
export * from './quiz';

export interface Zone {
  id: string;
  name: string;
  order: number;
  path: string;
  questions: Question[];
}

export interface UserProgress {
  version: number;
  xp: number;
  level: number;
  coins: number;
  phase: 'numbering' | 'quizzes_unlocked';
  testMode: boolean; // Add test mode toggle
  isExplorationMode: boolean; // Whether we are in discovery or quiz mode within test mode
  numbering: {
    currentNumber: number;
    livesLeft: number;
    assignedNumbers: Record<string, number>; // zoneId -> assigned order
  };
  quizzes: {
    quizzesUnlocked: boolean;
    answeredQuestionIds: Record<string, { correct: number; wrong: number }>;
    zoneQuizStats: Record<string, { attempts: number; bestScore: number }>;
  };
}
