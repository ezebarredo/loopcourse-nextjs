import { useStore } from "./store/store";
import {
  getQuestion,
  isCurrentQuestionAnswered,
  areAllQuestionsAnswered,
} from "./utils/utils";
import NextQuestionBtn from "./components/NextQuestionBtn";
import ResultsJSX from "./components/Results";
import SubmitResultsBtn from "./components/SubmitResultsBtn";

// .tsx it's ALWAYS for components ONLY.

// Pure functions:
// 1) for the same input we have same output
// 2) No side effects. No taking and no changing outside of scope.

// JSX components into separate files. -> PENDING

// 1) Previous question shouldn't work when question === 1

export default function Quiz() {
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

  //TODO: add shuffle to answers btns
  const shuffle = (array: string[]) => array.sort(() => Math.random() - 0.5);

  // AnswerClickUser
  const answerClick = (event: { target: any }) => {
    const userAnswer = event.target.innerHTML;
    setIsChosen(currentQuestionId, userAnswer);
    setUserAnswer(currentQuestionId, userAnswer);
    if (
      getQuestion(questions, currentQuestionId)?.correctAnswer === userAnswer
    ) {
      setAnswerToCorrect(currentQuestionId);
    } else {
      setAnswerToIncorrect(currentQuestionId);
    }
  };

  const showResults = () => {
    setAreResultsShown(true);
  };

  return (
    <>
      <main className="flex-shrink-0">
        <section className="py-5 bg-secondary bg-opacity-50">
          <div className="container px-4 my-5">
            <h2 className="display-5 fw-bold">Quiz Level Test</h2>
            <br />
            {currentQuestionId} / {questions.length}
            <div className="fs-3 fw-normal text-dark my-2">
              {getQuestion(questions, currentQuestionId)?.title}
            </div>
            {/* make component Answers.tsx */}
            {getQuestion(questions, currentQuestionId)?.answers.map(
              (answer) => (
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
              )
            )}
            <div className="d-flex gap-2">
              <div>
                {areAllQuestionsAnswered() ? SubmitResultsBtn : NextQuestionBtn}
              </div>
              <div>
                <button
                  onClick={previousQuestion}
                  className="btn-previousQuestion btn btn-primary"
                >
                  Poprzednie
                </button>
              </div>
              <div>
                <br />
              </div>
              {getQuestion(questions, currentQuestionId)?.answeredCorrectly
                ? "True"
                : "False"}
              {getQuestion(questions, currentQuestionId)?.userAnswer}
            </div>
            {areResultsShown && ResultsJSX}
          </div>
        </section>
      </main>
    </>
  );
}
