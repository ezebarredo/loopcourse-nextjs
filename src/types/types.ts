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
  title: string;
  audio: string;
  cards: Cards;
};

export type TypeLevels = Level[];
