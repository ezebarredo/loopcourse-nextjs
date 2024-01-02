import { create } from "zustand";

const useStore = create((set) => ({
  index: 0,
  correctAnswer: "",
  userQuestion: "",
  nextQuestion: () =>
    set((state: { index: number }) => ({ index: state.index + 1 })),
  reset: () => set({ index: 0 }),
}));

export default useStore;
