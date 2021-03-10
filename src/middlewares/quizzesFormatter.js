export default (data) => {
  const quizzesObj = {};
  data.forEach((quiz) => {
    if (!quizzesObj[quiz.category_name]) {
      quizzesObj[quiz.category_name] = [];
      quizzesObj[quiz.category_name].push(quiz);
    }
    else {
      quizzesObj[quiz.category_name].push(quiz);
    }
  });
  return quizzesObj;
};
