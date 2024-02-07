import { useStore } from "./store";
import Utils from "./utils";

// 1) User cannot click nextBtn before choosing an answer --> SOLVED

// 2) user see results only after clicking submitBtn -> SOLVED

// 3) Rename reset to previousQuestion or other. -> SOLVED

// 4) JSX components into separate files. -> PENDING

// 5) Store into own file --> store.tsx SOLVED

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

  // //get First Question from array of objects
  // const getQuestion = (questionId: string) =>
  //   questions.find(({ id }) => id === questionId);

  // //TODO: add shuffle to answers btns
  // const shuffle = (array: string[]) => array.sort(() => Math.random() - 0.5);

  // // AnswerClickUser
  // const answerClick = (event: { target: any }) => {
  //   const userAnswer = event.target.innerHTML;
  //   setIsChosen(currentQuestionId, userAnswer);
  //   setUserAnswer(currentQuestionId, userAnswer);
  //   if (getQuestion(currentQuestionId)?.correctAnswer === userAnswer) {
  //     setAnswerToCorrect(currentQuestionId);
  //   } else {
  //     setAnswerToIncorrect(currentQuestionId);
  //   }
  // };

  // const areAllQuestionsAnswered = () =>
  //   questions.find((question) => question.userAnswer === null) === undefined &&
  //   currentQuestionId === String(questions.length);

  // // 1) User cannot click nextBtn before choosing an answer --> SOLVED
  // const isCurrentQuestionAnswered = () => {
  //   const userCurrentQuestionAnswer =
  //     getQuestion(currentQuestionId)?.userAnswer;
  //   return userCurrentQuestionAnswer != null ?? undefined;
  //   //// Using logical OR (||) for default value
  //   // return userCurrentQuestionAnswer !== null && userCurrentQuestionAnswer !== undefined
  //   // ? userCurrentQuestionAnswer
  //   // : undefined;
  // };

  // // JSX
  // const nextQuestionBtn = (
  //   <button
  //     onClick={nextQuestion}
  //     className={`btn-next btn btn-primary ${
  //       isCurrentQuestionAnswered() ? "" : "disabled"
  //     }`}
  //   >
  //     Nastepne
  //   </button>
  // );

  // // JSX
  // const resultsJSX = (
  //   <div>
  //     <p>We recommmend you study the following levels:</p>
  //     {questions
  //       .filter((question) => !question.answeredCorrectly)
  //       .map((question) => (
  //         <li key={question.id}>
  //           <p>
  //             <b>{question.gramarLevel}</b>
  //           </p>
  //         </li>
  //       ))}
  //   </div>
  // );

  // const showResults = () => {
  //   setAreResultsShown(true);
  // };

  // // JSX
  // const submitResultsBtn = (
  //   <button onClick={showResults} className={`btn btn-success fw-bold`}>
  //     Sprawdź
  //   </button>
  // );

  return (
    <>
      <main className="flex-shrink-0">
        <section className="py-5 bg-secondary bg-opacity-50">
          <div className="container px-4 my-5">
            <h2 className="display-5 fw-bold">Quiz Level Test</h2>
            <br />
            {currentQuestionId} / {questions.length}
            <div className="fs-3 fw-normal text-dark my-2">
              {Utils.getQuestion(currentQuestionId)?.title}
            </div>
            {Utils.getQuestion(currentQuestionId)?.answers.map((answer) => (
              <button
                key={Number(answer.id)}
                type="button"
                className={`btn btnAnswer fs-4  my-3 me-3 mb-5 ${
                  answer.isChosen
                    ? "btn-success text-light"
                    : "btn-light text-dark"
                }`}
                onClick={Utils.answerClick}
              >
                {answer.answer}
              </button>
            ))}
            <div className="d-flex gap-2">
              <div>
                {Utils.areAllQuestionsAnswered()
                  ? Utils.submitResultsBtn
                  : Utils.nextQuestionBtn}
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
              {Utils.getQuestion(currentQuestionId)?.answeredCorrectly
                ? "True"
                : "False"}
              {Utils.getQuestion(currentQuestionId)?.userAnswer}
            </div>
            {areResultsShown && Utils.resultsJSX}
          </div>
        </section>
      </main>
    </>
  );
}
