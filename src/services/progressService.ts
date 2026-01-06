import type { UserProgress } from '../types';

const STORAGE_KEY = 'prague_discovery_progress';
const CURRENT_VERSION = 2;

const DEFAULT_PROGRESS: UserProgress = {
  version: CURRENT_VERSION,
  xp: 0,
  level: 1,
  coins: 0,
  phase: 'numbering',
  testMode: false,
  isExplorationMode: true,
  numbering: {
    currentNumber: 1,
    livesLeft: 5,
    assignedNumbers: {},
  },
  quizzes: {
    quizzesUnlocked: false,
    answeredQuestionIds: {},
    zoneQuizStats: {},
  },
};

export const progressService = {
  loadProgress(): UserProgress {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return DEFAULT_PROGRESS;
    try {
      const parsed = JSON.parse(saved);
      
      // Ensure all required fields exist (defensive against partial v2 saves)
      const merged = {
        ...DEFAULT_PROGRESS,
        ...parsed,
        numbering: {
          ...DEFAULT_PROGRESS.numbering,
          ...(parsed.numbering || {}),
        },
        quizzes: {
          ...DEFAULT_PROGRESS.quizzes,
          ...(parsed.quizzes || {}),
        }
      };

      return merged as UserProgress;
    } catch {
      return DEFAULT_PROGRESS;
    }
  },

  saveProgress(progress: UserProgress): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  },

  resetProgress(): UserProgress {
    this.saveProgress(DEFAULT_PROGRESS);
    return DEFAULT_PROGRESS;
  },

  toggleTestMode(): UserProgress {
    const progress = this.loadProgress();
    const newProgress: UserProgress = {
      ...progress,
      testMode: !progress.testMode,
      // Reset numbering/discovery when toggling test mode to avoid weird states
      numbering: {
        ...DEFAULT_PROGRESS.numbering,
        livesLeft: 5,
      },
    };
    this.saveProgress(newProgress);
    return newProgress;
  },

  toggleExplorationMode(): UserProgress {
    const progress = this.loadProgress();
    const newProgress: UserProgress = {
      ...progress,
      isExplorationMode: !progress.isExplorationMode,
    };
    this.saveProgress(newProgress);
    return newProgress;
  },

  // --- Numbering Phase ---

  assignNumber(zoneId: string, order: number, correctOrder: number): UserProgress {
    const progress = this.loadProgress();
    
    // Check if correct
    const isCorrect = order === correctOrder;
    
    if (isCorrect) {
      const newProgress: UserProgress = {
        ...progress,
        numbering: {
          ...progress.numbering,
          // Support both sequential numbering and free discovery
          currentNumber: order === progress.numbering.currentNumber 
            ? progress.numbering.currentNumber + 1 
            : progress.numbering.currentNumber,
          assignedNumbers: {
            ...progress.numbering.assignedNumbers,
            [zoneId]: order,
          },
        },
      };

      this.saveProgress(newProgress);
      return newProgress;
    } else {
      const newLives = progress.numbering.livesLeft - 1;
      let newProgress: UserProgress;
      
      if (newLives <= 0) {
        // Reset numbering/discovery
        newProgress = {
          ...progress,
          numbering: DEFAULT_PROGRESS.numbering,
        };
      } else {
        newProgress = {
          ...progress,
          numbering: {
            ...progress.numbering,
            livesLeft: newLives,
          },
        };
      }

      this.saveProgress(newProgress);
      return newProgress;
    }
  },

  unlockQuizzes(): UserProgress {
    const progress = this.loadProgress();
    const newProgress: UserProgress = {
      ...progress,
      phase: 'quizzes_unlocked',
      quizzes: {
        ...progress.quizzes,
        quizzesUnlocked: true,
      },
    };
    this.saveProgress(newProgress);
    return newProgress;
  },

  // --- Quiz Phase ---

  recordQuizResult(zoneId: string, score: number, questionResults: Record<string, boolean>): UserProgress {
    const progress = this.loadProgress();
    
    // Update question stats
    const newAnswered = { ...progress.quizzes.answeredQuestionIds };
    Object.entries(questionResults).forEach(([qId, isCorrect]) => {
      const stats = newAnswered[qId] || { correct: 0, wrong: 0 };
      newAnswered[qId] = {
        correct: stats.correct + (isCorrect ? 1 : 0),
        wrong: stats.wrong + (isCorrect ? 0 : 1),
      };
    });

    // Update zone stats
    const zoneStats = progress.quizzes.zoneQuizStats[zoneId] || { attempts: 0, bestScore: 0 };
    const newZoneStats = {
      attempts: zoneStats.attempts + 1,
      bestScore: Math.max(zoneStats.bestScore, score),
    };

    const newProgress: UserProgress = {
      ...progress,
      xp: progress.xp + (score * 2), // 2 XP per correct answer
      quizzes: {
        ...progress.quizzes,
        answeredQuestionIds: newAnswered,
        zoneQuizStats: {
          ...progress.quizzes.zoneQuizStats,
          [zoneId]: newZoneStats,
        },
      },
    };

    // Level up logic
    newProgress.level = Math.floor(newProgress.xp / 100) + 1;

    this.saveProgress(newProgress);
    return newProgress;
  },
};
