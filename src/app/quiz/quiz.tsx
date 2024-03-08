"use client";
import { useStore } from "./store/store";
import { getQuestion, areAllQuestionsAnswered } from "./utils/utils";
import NextQuestionBtn from "./components/NextQuestionBtn";
import ResultsJSX from "./components/Results";
import SubmitResultsBtn from "./components/SubmitResultsBtn";
import dynamic from "next/dynamic";

// .tsx it's ALWAYS for components ONLY.

// Pure functions:
// 1) For the same input we have same output
// 2) No side effects. No taking and no changing outside of scope.

const Answers = dynamic(() => import("./components/Answers"), { ssr: false });

export default function Quiz() {
  const {
    questions,
    currentQuestionId,
    areResultsShown,
    previousQuestion,
    setAnswerToCorrect,
    setAnswerToIncorrect,
    setUserAnswer,
    setIsChosen,
    setAreResultsShown,
  } = useStore();

  //TODO: add shuffle to answers btns
  const shuffle = (array: string[]) => array.sort(() => Math.random() - 0.5);

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
            <Answers />
            <div className="d-flex gap-2">
              <div>
                {areAllQuestionsAnswered(questions, currentQuestionId) ? (
                  <SubmitResultsBtn />
                ) : (
                  <NextQuestionBtn />
                )}
              </div>
              <div>
                <button
                  onClick={previousQuestion}
                  className={`btn-previousQuestion btn btn-primary
                  ${currentQuestionId != "1" ? "" : "disabled"}`}
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
            {areResultsShown && <ResultsJSX />}
          </div>
        </section>
      </main>
    </>
  );
}
