import { Answer } from "@/types/types";
import { useStore } from "../store/store";
import { getQuestion } from "../utils/utils";
import _shuffle from "lodash.shuffle";

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

  const question = getQuestion(questions, currentQuestionId);
  const shuffledAnswers = _shuffle(question?.answers);

  return shuffledAnswers.map((answer: Answer) => (
    <button
      key={Number(answer.id)}
      type="button"
      className={`btn btnAnswer fs-4  my-3 me-3 mb-5 ${
        answer.isChosen ? "btn-success text-light" : "btn-light text-dark"
      }`}
      onClick={answerClick}
    >
      {answer.answer}
    </button>
  ));
};

export default Answers;
