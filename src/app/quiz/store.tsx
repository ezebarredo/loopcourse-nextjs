import { create } from "zustand";
import { Store } from "@/types/types";

// 5) Store into own file --> SOLVED

// DATA
// Store ONLY store properties (data) and update functions (set).
export const useStore = create<Store>()((set) => ({
  questions: [
    {
      id: "1",
      title: "She ______ funny.",
      answers: [
        { id: "1", answer: "is", isChosen: false },
        { id: "2", answer: "am", isChosen: false },
        { id: "3", answer: "are", isChosen: false },
      ],
      correctAnswer: "is",
      answeredCorrectly: false,
      gramarLevel: "1.1 Subject Pronouns",
      userAnswer: null,
    },
    {
      id: "2",
      title: "This is Paul and ______ wife.",
      answers: [
        { id: "1", answer: "his", isChosen: false },
        { id: "2", answer: "my", isChosen: false },
        { id: "3", answer: "her", isChosen: false },
      ],
      correctAnswer: "his",
      answeredCorrectly: false,
      gramarLevel: "1.2 Possessive Adjectives",
      userAnswer: null,
    },
    {
      id: "3",
      title: "We ______ tired.",
      answers: [
        { id: "1", answer: "are not", isChosen: false },
        { id: "2", answer: "be not", isChosen: false },
        { id: "3", answer: "is not", isChosen: false },
      ],
      correctAnswer: "are not",
      answeredCorrectly: false,
      gramarLevel: "1.3 To be",
      userAnswer: null,
    },
  ],

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
