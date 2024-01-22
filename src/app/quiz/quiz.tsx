import { create } from "zustand";
import { Store } from "@/types/types";

const useStore = create<Store>()((set) => ({
  questions: [
    {
      id: "1",
      title: "She ______ funny.",
      answers: ["is", "am", "are"],
      // answers: [{id:"1",answer:"is", isClicked: false},
      // {id:"2", answer: "am", isClicked: false},
      // {id:"3", answer: "are", isClicked: false}],
      correctAnswer: "is",
      answeredCorrectly: false,
      gramarLevel: "1.1 Subject Pronouns",
      userAnswer: null,
    },
    {
      id: "2",
      title: "This is Paul and ______ wife.",
      answers: ["his", "my", "her"],
      correctAnswer: "his",
      answeredCorrectly: false,
      gramarLevel: "1.2 Possessive Adjectives",
      userAnswer: null,
    },
    {
      id: "3",
      title: "We ______ tired.",
      answers: ["are not", "be not", "is not"],
      correctAnswer: "are not",
      answeredCorrectly: false,
      gramarLevel: "1.3 To be",
      userAnswer: null,
    },
  ],

  currentQuestionId: "1",

  btnClicked: false,

  // answeredCorrectly: false,

  nextQuestion: () =>
    set((state: Store) => ({
      ...state,
      currentQuestionId: String(Number(state.currentQuestionId) + 1),
    })),

  reset: () => set({ currentQuestionId: "1" }),

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

  setbtnClicked: () =>
    set((state: Store) => ({
      ...state,
      btnClicked: !state.btnClicked,
    })),
}));

export default function Quiz() {
  const {
    questions,
    currentQuestionId,
    btnClicked,
    nextQuestion,
    reset,
    setAnswerToCorrect,
    setAnswerToIncorrect,
    setUserAnswer,
    setbtnClicked,
  } = useStore();

  const getQuestion = (questionId: string) =>
    questions.find(({ id }) => id === questionId);

  const shuffle = (array: string[]) => array.sort(() => Math.random() - 0.5);

  const answerClick = (event: { target: any }) => {
    //TODO: change btn background color when user click
    const userClick = event.target;
    setbtnClicked();
    btnClicked
      ? (userClick.style.background = "white")
      : (userClick.style.background = "green");
    const userAnswer = event.target.innerHTML;
    setUserAnswer(currentQuestionId, userAnswer);
    if (getQuestion(currentQuestionId)?.correctAnswer === userAnswer) {
      setAnswerToCorrect(currentQuestionId);
    } else {
      setAnswerToIncorrect(currentQuestionId);
    }
  };

  return (
    <>
      <main className="flex-shrink-0">
        <section className="py-5 bg-secondary bg-opacity-50">
          <div className="container px-4 my-5">
            <h2 className="display-5 fw-bold">Quiz Level</h2>
            <br />
            {currentQuestionId} / {questions.length}
            <div className="fs-3 fw-normal text-dark my-2">
              {getQuestion(currentQuestionId)?.title}
            </div>
            {getQuestion(currentQuestionId)?.answers.map((answer, index) => (
              <button
                key={index}
                type="button"
                className="btn btnAnswer btn-light fs-4 text-dark my-3 me-3 mb-5"
                onClick={answerClick}
              >
                {answer}
              </button>
            ))}
            <div className="d-flex gap-2">
              <div>
                <button
                  onClick={nextQuestion}
                  className="btn-next btn btn-primary"
                >
                  Następny
                </button>
              </div>
              <div>
                <button onClick={reset} className="btn-reset btn btn-dark">
                  Reset
                </button>
              </div>
              {getQuestion(currentQuestionId)?.answeredCorrectly
                ? "True"
                : "False"}
              <br />
              {getQuestion(currentQuestionId)?.userAnswer}
              <br />
              {btnClicked ? "Active" : "Inactive"}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

{
}
