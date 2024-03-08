"use client";
import { Answer } from "@/types/types";
import { useStore } from "../store/store";
import { getQuestion } from "../utils/utils";

const Answers = () => {
  const {
    questions,
    currentQuestionId,
    setIsChosen,
    setUserAnswer,
    setAnswerToCorrect,
    setAnswerToIncorrect,
  } = useStore();

  const answerClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = event.currentTarget;
    const userAnswer = button.innerHTML;
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

  // TODO: useEffect how to use it ask next lesson

  // 2nd argument [] (array) will stop the infinit loop
  // useEffect(() => {
  //   const question = getQuestion(questions, currentQuestionId);
  //   if (question?.answers) {
  //     setShuffledAnswers(question?.answers);
  //   }
  // }, [questions]);

  // console.log(setShuffledAnswers(currentQuestionId));

  // Only return 1 element from a component

  // setShuffledAnswers(currentQuestionId);

  return (
    <>
      {getQuestion(questions, currentQuestionId)?.answers.map(
        (answer: Answer) => (
          <button
            key={Number(answer.id)}
            type="button"
            className={`btn btnAnswer fs-4  my-3 me-3 mb-5 
          ${answer.isChosen ? "btn-success text-light" : "btn-light text-dark"}
          `}
            onClick={answerClick}
          >
            {answer.answer}
          </button>
        )
      )}
    </>
  );
};

export default Answers;
