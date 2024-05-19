import { useStore } from "../store/store";

// JSX TODO: make component Results.tsx
const ResultsJSX = () => {
  const { questions } = useStore();
  return (
    <div>
      <br />
      <p>
        <b>We recommmend you study the following levels:</b>
      </p>
      {questions
        .filter((question) => !question.answeredCorrectly)
        .map((question) => (
          <li key={question.id} style={{ listStyleType: "none" }}>
            <p>{question.gramarLevel}</p>
          </li>
        ))}
    </div>
  );
};

export default ResultsJSX;
