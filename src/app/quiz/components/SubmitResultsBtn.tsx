import showResults from "../quiz";

// JSX TODO: make own component with file
const SubmitResultsBtn = () => {
  return (
    <button onClick={showResults} className={`btn btn-success fw-bold`}>
      Sprawdź
    </button>
  );
};

export default SubmitResultsBtn;
