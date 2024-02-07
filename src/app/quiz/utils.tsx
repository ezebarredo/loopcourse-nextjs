import { useStore } from "./store";

const {
  questions,
  currentQuestionId,
  areResultsShown,
  nextQuestion,
  previousQuestion,
  setAnswerToCorrect,
  setAnswerToIncorrect,
  setUserAnswer,
  setIsChosen,
  setAreResultsShown,
} = useStore();

//get First Question from array of objects
const getQuestion = (questionId: string) =>
  questions.find(({ id }) => id === questionId);

//TODO: add shuffle to answers btns
const shuffle = (array: string[]) => array.sort(() => Math.random() - 0.5);

// AnswerClickUser
const answerClick = (event: { target: any }) => {
  const userAnswer = event.target.innerHTML;
  setIsChosen(currentQuestionId, userAnswer);
  setUserAnswer(currentQuestionId, userAnswer);
  if (getQuestion(currentQuestionId)?.correctAnswer === userAnswer) {
    setAnswerToCorrect(currentQuestionId);
  } else {
    setAnswerToIncorrect(currentQuestionId);
  }
};

const areAllQuestionsAnswered = () =>
  questions.find((question) => question.userAnswer === null) === undefined &&
  currentQuestionId === String(questions.length);

// 1) User cannot click nextBtn before choosing an answer --> SOLVED
const isCurrentQuestionAnswered = () => {
  const userCurrentQuestionAnswer = getQuestion(currentQuestionId)?.userAnswer;
  return userCurrentQuestionAnswer != null ?? undefined;
  //// Using logical OR (||) for default value
  // return userCurrentQuestionAnswer !== null && userCurrentQuestionAnswer !== undefined
  // ? userCurrentQuestionAnswer
  // : undefined;
};

// JSX
const nextQuestionBtn = (
  <button
    onClick={nextQuestion}
    className={`btn-next btn btn-primary ${
      isCurrentQuestionAnswered() ? "" : "disabled"
    }`}
  >
    Nastepne
  </button>
);

// JSX
const resultsJSX = (
  <div>
    <p>We recommmend you study the following levels:</p>
    {questions
      .filter((question) => !question.answeredCorrectly)
      .map((question) => (
        <li key={question.id}>
          <p>
            <b>{question.gramarLevel}</b>
          </p>
        </li>
      ))}
  </div>
);

const showResults = () => {
  setAreResultsShown(true);
};

// JSX
const submitResultsBtn = (
  <button onClick={showResults} className={`btn btn-success fw-bold`}>
    Sprawdź
  </button>
);

const Utils = {
  getQuestion,
  shuffle,
  answerClick,
  areAllQuestionsAnswered,
  isCurrentQuestionAnswered,
  nextQuestionBtn,
  resultsJSX,
  showResults,
  submitResultsBtn,
};

export default Utils;
