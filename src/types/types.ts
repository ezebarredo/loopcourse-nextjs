// CARDS
export type Card = {
  id: string;
  front: string;
  back: string;
  image: string;
};

export type Cards = Card[];

// Quiz Questions
export type Question = {
  id: string;
  title: string;
  answers: string[];
  correctAnswer: string;
  answeredCorrectly: boolean;
  gramarLevel: string;
};

export type Questions = Question[];

// LEVELS
export type Level = {
  id: string;
  topLevel: string;
  title: string;
  audio: string;
  cards: Cards;
  question: Question;
};

export type Levels = Level[];
