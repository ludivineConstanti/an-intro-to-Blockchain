export const GET_ALL_QUIZZES = 'GET_ALL_QUIZZES';
export const STOCK_ALL_QUIZZES = 'STOCK_ALL_QUIZZES';
export const GET_ONE_QUIZ = 'GET_ONE_QUIZ';
export const STOCK_ONE_QUIZ = 'STOCK_ONE_QUIZ';
export const STOCK_ANSWER = 'STOCK_ANSWER';
export const CHANGE_USER_QUIZ_INFOS = 'CHANGE_USER_QUIZ_INFOS';
export const INCREASE_QUESTION = 'INCREASE_QUESTION';
export const VALIDATE_QUIZ = 'VALIDATE_QUIZ';
export const USER_FINISHED_QUIZ = 'USER_FINISHED_QUIZ';

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

export const changeUserQuizInfos = (value, name) => ({
  type: CHANGE_USER_QUIZ_INFOS,
  name,
  value,
});

export const increaseQuestion = () => ({
  type: INCREASE_QUESTION,
});

export const validateQuiz = () => ({
  type: VALIDATE_QUIZ,
});

export const userFinishedQuiz = (score, totalAnswers, goodAnswers) => ({
  type: USER_FINISHED_QUIZ,
  score,
  totalAnswers,
  goodAnswers,
});
