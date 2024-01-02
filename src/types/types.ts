// CARDS
export type Card = {
  id: string;
  front: string;
  back: string;
  image: string;
};

export type Cards = Card[];

export type Question = {
  id: string;
  title: string;
  answers: string[];
  correctAnswer: string;
  userAnswer: string;
  gramarLevel: string;
};

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
