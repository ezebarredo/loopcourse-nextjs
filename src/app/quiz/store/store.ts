import { create } from "zustand";
import { Store } from "@/types/types";
import questions from "../data/data";
// DATA
// Store ONLY store properties (data) and update functions (set).
export const useStore = create<Store>()((set) => ({
  questions,
  currentQuestionId: "1",
  areResultsShown: false,

  nextQuestion: () =>
    set((state: Store) => ({
      ...state,
      currentQuestionId: String(Number(state.currentQuestionId) + 1),
    })),

  // 3) Rename reset to previousQuestion or other. -> SOLVED
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

  setIsChosen: (questionId: string, userAnswer: string) =>
    set((state: Store) => ({
      ...state,
      questions: state.questions.map((question) =>
        question.id === questionId
          ? {
              ...question,
              answers: question.answers.map(
                (answer) => ({
                  ...answer,
                  isChosen: answer.answer === userAnswer,
                })
                // answer.answer === userAnswer
                //   ? {
                //       ...answer,
                //       isChosen: true,
                //     }
                //   : { ...answer, isChosen: false }
              ),
            }
          : question
      ),
    })),

  setAreResultsShown: (bool: boolean) =>
    set((state: Store) => ({
      ...state,
      areResultsShown: bool,
    })),
}));
