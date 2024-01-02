import { create } from "zustand";
import Levels from "../cards/main";

const useStore = create((set) => ({
  index: 0,
  correctAnswer: "",
  userQuestion: "",
  nextQuestion: () =>
    set((state: { index: number }) => ({ index: state.index + 1 })),
  reset: () => set({ index: 0 }),
}));

export default function Quiz() {
  const questions = [
    {
      id: "1",
      title: "She ______ funny.",

      answers: ["is", "am", "are"],
      correctAnswer: "is",
      userAnswer: "",
      gramarLevel: "1.1 Subject Pronouns",
    },
    {
      id: "2",
      title: "This is Paul and ..... wife.",
      answers: ["his", "my", "her"],
      correctAnswer: "his",
      userAnswer: "",
      gramarLevel: "1.2 Possessive Adjectives",
    },
    {
      id: "3",
      title: "We ...... tired.",
      answers: ["are not", "be not", "is not"],
      correctAnswer: "are not",
      userAnswer: "",
      gramarLevel: "1.3 To be",
    },
  ];

  const { index, nextQuestion, reset } = useStore();
  // const questionId = "1";
  // const getQuestion = questions.find((question) => question.id === questionId);
  const shuffle = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  let correctAnswers: string[] = [];
  let incorrectAnswers: string[] = [];

  const answerClick = (event: { target: any }) => {
    const UserAnswer = event.target.innerHTML;
    if (UserAnswer === questions[index].correctAnswer) {
      console.log("Correct!");
      correctAnswers.push(questions[index].gramarLevel);
    } else {
      console.log("Incorrect");
      incorrectAnswers.push(questions[index].gramarLevel);
    }
    console.log(
      "Correct Answer",
      correctAnswers,
      "incorrect Answer",
      incorrectAnswers
    );
  };

  return (
    <>
      <main className="flex-shrink-0">
        <section className="py-5 bg-secondary bg-opacity-50">
          <div className="container px-4 my-5">
            <h2 className="display-5 fw-bold">Quiz Level</h2>
            <br />
            {index + 1} / {questions.length}
            <div className="fs-3 fw-normal text-dark my-2">
              {questions[index]?.title}
            </div>
            {questions[index]?.answers.map((answer) => (
              <button
                // key={index + 1} TODO: key id for each answer
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
