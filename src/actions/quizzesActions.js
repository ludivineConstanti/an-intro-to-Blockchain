export const GET_ALL_QUIZZES = 'GET_ALL_QUIZZES';
export const GET_ONE_QUIZ = 'GET_ONE_QUIZ';
export const STOCK_QUIZZES = 'STOCK_QUIZZES';
export const STOCK_QUIZ = 'STOCK_QUIZ';
export const STOCK_ANSWER = 'STOCK_ANSWER';
export const CONFIRM_QUESTION = 'CONFIRM_QUESTION';
export const INCREASE_QUESTION = 'INCREASE_QUESTION';

export const getAllQuizzes = () => ({
  type: GET_ALL_QUIZZES,
});

export const getOneQuiz = (id) => ({
  type: GET_ONE_QUIZ,
  id,
});

export const stockQuizzes = (quizzes) => ({
  type: STOCK_QUIZZES,
  quizzes,
});

export const stockQuiz = (currentQuizData) => ({
  type: STOCK_QUIZ,
  currentQuizData,
});

export const stockAnswer = (userAnswers, questionNumber) => ({
  type: STOCK_ANSWER,
  userAnswers,
  questionNumber,
});

export const confirmQuestion = () => ({
  type: CONFIRM_QUESTION,
});

export const increaseQuestion = (questionNumber) => ({
  type: INCREASE_QUESTION,
  questionNumber,
});
