export type QuestionType = 'multiple_choice' | 'true_false';

export interface BaseQuestion {
  id: string;
  zoneId: string;
  type: QuestionType;
  prompt: string;
  explanation: string;
  sources: string[];
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple_choice';
  options: string[];
  correctIndex: number;
}

export interface TrueFalseQuestion extends BaseQuestion {
  type: 'true_false';
  correct: boolean;
}

export type Question = MultipleChoiceQuestion | TrueFalseQuestion;
