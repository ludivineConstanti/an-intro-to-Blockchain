export const GET_ALL_QUIZZES = 'GET_ALL_QUIZZES';
export const STOCK_ALL_QUIZZES = 'STOCK_ALL_QUIZZES';
export const GET_ONE_QUIZ = 'GET_ONE_QUIZ';
export const STOCK_ONE_QUIZ = 'STOCK_ONE_QUIZ';
export const STOCK_ANSWER = 'STOCK_ANSWER';
export const VALIDATE_QUESTION = 'VALIDATE_QUESTION';
export const INCREASE_QUESTION = 'INCREASE_QUESTION';

export const getAllQuizzes = () => ({
  type: GET_ALL_QUIZZES,
});

export const stockAllQuizzes = (quizzes) => ({
  type: STOCK_ALL_QUIZZES,
  quizzes,
});

export const getOneQuiz = (id) => ({
  type: GET_ONE_QUIZ,
  id,
});

export const stockOneQuiz = (currentQuizData) => ({
  type: STOCK_ONE_QUIZ,
  currentQuizData,
});

export const stockAnswer = (userAnswers, questionNumber) => ({
  type: STOCK_ANSWER,
  userAnswers,
  questionNumber,
});

export const validateQuestion = () => ({
  type: VALIDATE_QUESTION,
});

export const increaseQuestion = (questionNumber) => ({
  type: INCREASE_QUESTION,
  questionNumber,
});
