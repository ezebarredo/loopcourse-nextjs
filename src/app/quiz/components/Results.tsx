import { useStore } from "../store/store";

// JSX TODO: make component Results.tsx
const ResultsJSX = () => {
  const { questions } = useStore();
  return (
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
};

export default ResultsJSX;
