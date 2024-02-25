import { useStore } from "../store/store";
import { isCurrentQuestionAnswered } from "../utils/utils";

const NextQuestionBtn = () => {
  const { nextQuestion, questions, currentQuestionId } = useStore();
  return (
    <button
      onClick={nextQuestion}
      className={`btn-next btn btn-primary
       ${
         isCurrentQuestionAnswered(questions, currentQuestionId)
           ? ""
           : "disabled"
       }
       `}
    >
      Nastepne
    </button>
  );
};

export default NextQuestionBtn;
