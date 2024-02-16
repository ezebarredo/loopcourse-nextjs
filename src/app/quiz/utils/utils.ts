import { Questions } from "@/types/types";

//get First Question from array of objects
const getQuestion = (questions: Questions, questionId: string) =>
  questions.find((question) => question.id === questionId);

// User select answer
const isCurrentQuestionAnswered = (
  questions: Questions,
  questionId: string
) => {
  const userCurrentQuestionAnswer = getQuestion(
    questions,
    questionId
  )?.userAnswer;
  return userCurrentQuestionAnswer != null ?? undefined;
};

const areAllQuestionsAnswered = (questions: Questions, questionId: string) =>
  questions.find((question) => question.userAnswer === null) === undefined &&
  questionId === String(questions.length);

export { getQuestion, isCurrentQuestionAnswered, areAllQuestionsAnswered };
