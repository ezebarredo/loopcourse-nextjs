import { create } from "zustand";
import { Questions } from "@/types/types";

type Store = {
  questions: Questions;
  currentQuestionId: string;
  answeredCorrectly: boolean;
  nextQuestion: () => void;
  reset: () => void;
  setAnswerToCorrect: (questionId: string) => void;
};

const useStore = create<Store>()((set) => ({
  questions: [
    {
      id: "1",
      title: "She ______ funny.",
      answers: ["is", "am", "are"],
      correctAnswer: "is",
      answeredCorrectly: false,
      gramarLevel: "1.1 Subject Pronouns",
    },
    {
      id: "2",
      title: "This is Paul and ______ wife.",
      answers: ["his", "my", "her"],
      correctAnswer: "his",
      answeredCorrectly: false,
      gramarLevel: "1.2 Possessive Adjectives",
    },
    {
      id: "3",
      title: "We ______ tired.",
      answers: ["are not", "be not", "is not"],
      correctAnswer: "are not",
      answeredCorrectly: false,
      gramarLevel: "1.3 To be",
    },
  ],

  currentQuestionId: "1",
  answeredCorrectly: false,

  nextQuestion: () =>
    set((state: Store) => ({
      ...state,
      currentQuestionId: state.currentQuestionId + 1,
    })),

  reset: () => set({ currentQuestionId: "1" }),

  setAnswerToCorrect: (questionId: string) =>
    set((state: Store) => ({
      ...state,
      questions: state.questions.map((question) =>
        question.id === questionId
          ? { ...question, answerCorrectly: true }
          : question
      ),
    })),
}));

export default function Quiz() {
  const {
    questions,
    currentQuestionId,
    nextQuestion,
    reset,
    setAnswerToCorrect,
  } = useStore();

  const getQuestion = (questionId: string) =>
    questions.find(({ id }) => id === "1");

  const shuffle = (array: string[]) => array.sort(() => Math.random() - 0.5);

  const answerClick = (event: { target: any }) => {
    const userClickAnswer = event.target.innerHTML;
    setAnswerToCorrect(currentQuestionId);

    // const questionsWithChangedAnswer = questions.map((question) => {
    //   question.correctAnswer === userClickAnswer
    //     ? { ...question, answeredCorrectly: true }
    //     : question;
    // });
  };

  return (
    <>
      <main className="flex-shrink-0">
        <section className="py-5 bg-secondary bg-opacity-50">
          <div className="container px-4 my-5">
            <h2 className="display-5 fw-bold">Quiz Level</h2>
            <br />
            {} / {questions.length}
            <div className="fs-3 fw-normal text-dark my-2">
              {getQuestion(currentQuestionId)?.title}
            </div>
            {getQuestion(currentQuestionId)?.answers.map((answer) => (
              <button
                // key={currentQuestion + 1} TODO: key id for each answer
                type="button"
                className="btn btnAnswer fs-4 btn-light text-dark my-3 me-3 mb-5"
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
                {/* <button
                  onClick={setAnswerToCorrect}
                  className="btn-reset btn btn-dark"
                >
                  setAnswerCorrect
                </button>
                {setAnswerToCorrect} */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

{
  /* {questions.map((question) => {
        return (
          <>
            <br />
            <p>{question.title}</p>
            {question.answers.map((answer) => (
              <button key={question.id}>{answer}</button>
            ))}
            <br />
          </>
        );
      })} */
}
