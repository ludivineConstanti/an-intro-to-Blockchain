export default (quizData) => {
  const quizFormatted = {
    title: quizData[0].quiz_title,
    id: quizData[0].quiz_id,
    totalQuestions: 0,
  };

  for (let i = 0; i < quizData.length; i += 1) {
    if (!quizFormatted[`question${quizData[i].question_id}`]) {
      quizFormatted.totalQuestions += 1;

      quizFormatted[`question${quizData[i].question_id}`] = {
        id: quizData[i].question_id,
        statement: quizData[i].question_statement,
        justification: quizData[i].question_justification,
        articleLink: quizData[i].article_link,
        answersInfo: {
          total: 0,
          good: 0,
          wrong: 0,
        },
        answers: [],
      };
    }

    quizFormatted[`question${quizData[i].question_id}`].answers.push({
      id: quizData[i].answer_id,
      name: quizData[i].answer_name,
      goodAnswer: quizData[i].good_answer,
    });

    if (quizData[i].good_answer) {
      quizFormatted[`question${quizData[i].question_id}`].answersInfo.good += 1;
    }

    else quizFormatted[`question${quizData[i].question_id}`].answersInfo.bad += 1;

    quizFormatted[`question${quizData[i].question_id}`].answersInfo.total += 1;
  }
  return quizFormatted;
};
