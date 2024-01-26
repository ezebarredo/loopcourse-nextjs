import { create } from "zustand";
import { Store } from "@/types/types";

// DATA
const useStore = create<Store>()((set) => ({
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

  nextQuestion: () =>
    set((state: Store) => ({
      ...state,
      currentQuestionId: String(Number(state.currentQuestionId) + 1),
    })),

  reset: () => set({ currentQuestionId: "1" }),

  //TODO: check again this function to learn
  showIncorrectAnswersLevels: () =>
    set((state: Store) => ({
      ...state,
      questions: state.questions
        .filter((answer) => answer.answeredCorrectly === false)
        .map((answer) => ({
          ...answer,
          grammarLevel: answer.gramarLevel,
        })),
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
}));

export default function Quiz() {
  const {
    questions,
    currentQuestionId,
    nextQuestion,
    reset,
    setAnswerToCorrect,
    setAnswerToIncorrect,
    setUserAnswer,
    setIsChosen,
    showIncorrectAnswersLevels,
  } = useStore();

  //get First Question from array of object
  const getQuestion = (questionId: string) =>
    questions.find(({ id }) => id === questionId);

  //TODO: add shuffle to answers btns
  // const shuffle = (array: string[]) => array.sort(() => Math.random() - 0.5);

  // AnswerClickUser
  const answerClick = (event: { target: any }) => {
    const userAnswer = event.target.innerHTML;
    // 1 answer.setIsChosen to true of false. No toggle
    setIsChosen(currentQuestionId, userAnswer);
    // 2 render array again in UI answer.answer === userAnswer
    setUserAnswer(currentQuestionId, userAnswer);
    if (getQuestion(currentQuestionId)?.correctAnswer === userAnswer) {
      setAnswerToCorrect(currentQuestionId);
    } else {
      setAnswerToIncorrect(currentQuestionId);
    }
  };

  // onClick getGrammarLevels
  const getGrammarLevels = () => showIncorrectAnswersLevels();

  // Testing sumAnswers shows array of objects answeredCorrectly === false
  const showIncorrectAnswersLevel = questions
    .filter((answer) => answer.answeredCorrectly === false)
    .map((answer) => answer.gramarLevel)
    .join("");
  console.log(showIncorrectAnswersLevel);

  return (
    <>
      <main className="flex-shrink-0">
        <section className="py-5 bg-secondary bg-opacity-50">
          <div className="container px-4 my-5">
            <h2 className="display-5 fw-bold">Quiz Level Test</h2>
            <br />
            {currentQuestionId} / {questions.length}
            <div className="fs-3 fw-normal text-dark my-2">
              {getQuestion(currentQuestionId)?.title}
            </div>
            {getQuestion(currentQuestionId)?.answers.map((answer) => (
              <button
                key={Number(answer.id)}
                type="button"
                className={`btn btnAnswer fs-4  my-3 me-3 mb-5 ${
                  answer.isChosen
                    ? "btn-success text-light"
                    : "btn-light text-dark"
                }`}
                onClick={answerClick}
              >
                {answer.answer}
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
              <div>
                <button
                  onClick={getGrammarLevels}
                  className="btn-showIncorrectAnswers btn btn-dark"
                >
                  Show Results
                </button>
                {showIncorrectAnswersLevel}
              </div>
              {getQuestion(currentQuestionId)?.answeredCorrectly
                ? "True"
                : "False"}
              <br />
              {getQuestion(currentQuestionId)?.userAnswer}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

{
}
