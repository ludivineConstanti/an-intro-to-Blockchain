export const GET_ALL_ARTICLES = 'GET_ALL_ARTICLES';
export const STOCK_ARTICLES = 'STOCK_ARTICLES';

export const getAllArticles = () => ({
  type: GET_ALL_ARTICLES,
});

export const stockArticles = (payload) => ({
  type: STOCK_ARTICLES,
  payload,
});

/*

export const GET_ONE_QUIZ = 'GET_ONE_QUIZ';

export const STOCK_QUIZ = 'STOCK_QUIZ';
export const STOCK_ANSWER = 'STOCK_ANSWER';
export const CONFIRM_QUESTION = 'CONFIRM_QUESTION';
export const INCREASE_QUESTION = 'INCREASE_QUESTION';

export const getOneQuiz = (id) => ({
  type: GET_ONE_QUIZ,
  id,
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
}); */
