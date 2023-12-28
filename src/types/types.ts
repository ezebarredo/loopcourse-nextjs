// CARDS
export type Card = {
  id: string;
  front: string;
  back: string;
  image: string;
};

export type Cards = Card[];

// LEVELS
export type Level = {
  id: string;
  topLevel: string;
  title: string;
  audio: string;
  cards: Cards;
};

export type Levels = Level[];
