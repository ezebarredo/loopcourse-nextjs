// CARDS - flashcards
export type Card = {
  id: string;
  front: string;
  back: string;
  image: string;
};

export type Cards = Card[];

// Quiz answers
export type Answer = {
  id: string;
  answer: string;
  isChosen: boolean;
};

export type Answers = Answer[];

// Quiz Questions
export type Question = {
  id: string;
  title: string;
  answers: Answers;
  correctAnswer: string;
  answeredCorrectly: boolean;
  gramarLevel: string;
  userAnswer: string | null;
};

export type Questions = Question[];

// STORE QUIZ
export type Store = {
  questions: Questions;
  currentQuestionId: string;
  areResultsShown: boolean;
  nextQuestion: () => void;
  previousQuestion: () => void;
  setAnswerToCorrect: (questionId: string) => void;
  setAnswerToIncorrect: (questionId: string) => void;
  setUserAnswer: (questionId: string, userAnswer: string) => void;
  setIsChosen: (questionId: string, userAnswer: string) => void;
  setAreResultsShown: (bool: boolean) => void;
};

// LEVELS - Flashcards
export type Level = {
  id: string;
  topLevel: string;
  title: string;
  audio: string;
  cards: Cards;
  question: Question;
};

export type Levels = Level[];
