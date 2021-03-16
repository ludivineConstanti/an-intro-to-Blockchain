import {
  STOCK_ONE_QUIZ,
  INCREASE_QUESTION,
  STOCK_ANSWER,
  CHANGE_USER_QUIZ_INFOS,
  USER_FINISHED_QUIZ,
  LEAVE_QUIZ,
} from 'src/actions/quizzesActions';

const initialState = {
  currentQuizData: {},
  userQuizInfos: {
    questionNumber: 1,
    showAnswer: false,
    userAnswers: {},
    isPlaying: false,
    hasFinishedQuiz: false,
    score: 0,
    totalAnswers: 0,
    goodAnswers: 0,
    currentQuestionId: 1,
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case STOCK_ONE_QUIZ: {
      return {
        ...state,
        currentQuizData: action.currentQuizData,
        userQuizInfos: {
          ...initialState.userQuizInfos,
          currentQuestionId: action.currentQuizData.idFirstQuestion,
          isPlaying: true,
        },
      };
    }
    case CHANGE_USER_QUIZ_INFOS: {
      return {
        ...state,
        userQuizInfos: {
          ...state.userQuizInfos,
          [action.name]: action.value,
        },
      };
    }
    case INCREASE_QUESTION: {
      return {
        ...state,
        userQuizInfos: {
          ...state.userQuizInfos,
          showAnswer: false,
          questionNumber: state.userQuizInfos.questionNumber + 1,
          currentQuestionId: state.userQuizInfos.currentQuestionId + 1,
        },
      };
    }
    case STOCK_ANSWER: {
      return {
        ...state,
        userQuizInfos: {
          ...state.userQuizInfos,
          userAnswers: {
            ...state.userQuizInfos.userAnswers,
            ...action.userAnswers,
          },
        },
      };
    }
    case USER_FINISHED_QUIZ: {
      return {
        ...state,
        userQuizInfos: {
          ...state.userQuizInfos,
          hasFinishedQuiz: true,
          score: action.score,
          totalAnswers: action.totalAnswers,
          goodAnswers: action.goodAnswers,
        },
      };
    }
    case LEAVE_QUIZ: {
      return {
        ...state,
        currentQuizData: {},
        userQuizInfos: {
          ...state.userQuizInfos,
          showAnswer: false,
          userAnswers: {},
          isPlaying: false,
          hasFinishedQuiz: false,
          score: 0,
          totalAnswers: 0,
          goodAnswers: 0,
        },
      };
    }
    default:
      return state;
  }
};
