import { useStore } from "../store/store";
import { getQuestion } from "../utils/utils";
import answerClick from "../quiz";

const Answers = () => {
  const { questions, currentQuestionId } = useStore();
  return getQuestion(questions, currentQuestionId)?.answers.map((answer) => (
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
