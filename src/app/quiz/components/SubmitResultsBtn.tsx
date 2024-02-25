import { useStore } from "../store/store";

// JSX TODO: make own component with file
const SubmitResultsBtn = () => {
  const { setAreResultsShown } = useStore();
  return (
    <button
      onClick={() => setAreResultsShown(true)}
      className={`btn btn-success fw-bold`}
    >
      Sprawdź
    </button>
  );
};

export default SubmitResultsBtn;
