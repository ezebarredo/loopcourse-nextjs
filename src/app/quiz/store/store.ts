import { create } from "zustand";
import { Store } from "@/types/types";
import questions from "../data/data";
import _shuffle from "lodash.shuffle";

// DATA
// Store ONLY store properties (data) and update functions (set).
export const useStore = create<Store>()((set) => ({
  questions: questions.map((question) => {
    return {
      ...question,
      answers: _shuffle([...question.answers]),
    };
  }),

  currentQuestionId: "1",
  areResultsShown: false,

  nextQuestion: () =>
    set((state: Store) => ({
      ...state,
      currentQuestionId: String(Number(state.currentQuestionId) + 1),
    })),

  previousQuestion: () =>
    set((state: Store) => ({
      ...state,
      currentQuestionId: String(Number(state.currentQuestionId) - 1),
      areResultsShown: false,
    })),

  setAnswerToCorrect: (questionId: string) =>
    set((state: Store) => ({
      ...state,
      questions: state.questions.map((question) =>
        question.id === questionId
          ? { ...question, answeredCorrectly: true }
          : question
      ),
    })),

  setAnswerToIncorrect: (questionId: string) =>
    set((state: Store) => ({
      ...state,
      questions: state.questions.map((question) =>
        question.id === questionId
          ? { ...question, answeredCorrectly: false }
          : question
      ),
    })),

  setUserAnswer: (questionId: string, userAnswer: string) =>
    set((state: Store) => ({
      ...state,
      questions: state.questions.map((question) =>
        question.id === questionId ? { ...question, userAnswer } : question
      ),
    })),

  setIsChosen: (questionId: string, userAnswer: string) => {
    set((state: Store) => ({
      ...state,
      questions: state.questions.map((question) =>
        question.id === questionId
          ? {
              ...question,
              answers: question.answers.map((answer) => {
                return {
                  ...answer,
                  isChosen: answer.answer === userAnswer,
                };
              }),
            }
          : question
      ),
    }));
  },

  setAreResultsShown: (bool: boolean) =>
    set((state: Store) => ({
      ...state,
      areResultsShown: bool,
    })),

  setShuffledAnswers: (questionId: string) =>
    set((state: Store) => ({
      ...state,
      questions: state.questions.map((question) =>
        question.id === questionId
          ? {
              ...question,
              answers: _shuffle([...question.answers]),
            }
          : question
      ),
    })),
}));
