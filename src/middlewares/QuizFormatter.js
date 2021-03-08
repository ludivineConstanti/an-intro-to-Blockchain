const quizFormateur = (quizData) => {
  const quizFormatted = [];
  const questions = [];
  let questionTitle = '';
  let counter = 1;
  quizData.forEach((element) => {
    if (element.question_statement !== questionTitle) {
      questionTitle = element.question_statement;
      const truc = quizData.filter((subElement) => subElement.question_statement === questionTitle);
      truc.id = counter;
      questions.push(truc);
      counter += 1;
    }
  });
  counter = 1;
  questions.forEach((element) => {
    quizFormatted[`question${counter}`] = {
      id: element.question_id,
      statement: element[0].question_statement,
      justification: element[0].question_justification,
      articleLink: element[0].article_link,
    };
    let answerCounter = 1;
    let totalGoodAnswer = 0;
    element.forEach((subElement) => {
      quizFormatted[`question${counter}`][`answer${answerCounter}`] = {
        id: subElement.answer_id,
        title: subElement.answer_name,
        goodAnswer: subElement.good_answer,
      };
      // eslint-disable-next-line no-unused-expressions
      subElement.good_answer === true
        ? totalGoodAnswer += 1
        : totalGoodAnswer += 0;
      answerCounter += 1;
    });
    quizFormatted[`question${counter}`].totalAnswer = answerCounter - 1;
    quizFormatted[`question${counter}`].totalGoodAnswer = totalGoodAnswer;
    counter += 1;
  });
  quizFormatted.infos = {};
  const trueAnswer = quizData.filter((element) => (element.good_answer === true));
  quizFormatted.infos.quizName = quizData[0].quiz_title;
  quizFormatted.infos.totalQuestions = questions.length;
  quizFormatted.infos.totalAnswer = quizData.length;
  quizFormatted.infos.goodAnswerNumber = trueAnswer.length;
  return quizFormatted;
};

export default quizFormateur;
