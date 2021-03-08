const quizFormateur = (quizData) => {
  const quizFormatted = [];
  const questions = [];
  let questionTitle = '';
  let counter = 1;
  quizData.forEach((element) => {
    if (element.en_statement !== questionTitle) {
      questionTitle = element.en_statement;
      const truc = quizData.filter((subElement) => (subElement.en_statement === questionTitle));
      truc.id = counter;
      questions.push(truc);
      counter += 1;
    }
  });
  counter = 1;
  questions.forEach((element) => {
    quizFormatted[`question${counter}`] = {
      id: element.id,
      statement: element[0].en_statement,
      justification: element[0].en_justification,
      articleLink: element[0].en_article_link,
    };
    let answerCounter = 1;
    let totalGoodAnswer = 0;
    element.forEach((subElement) => {
      quizFormatted[`question${counter}`][`answer${answerCounter}`] = {
        id: subElement.id,
        title: subElement.en_answer_name,
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
  quizFormatted.infos.quizName = quizData[0].en_title;
  quizFormatted.infos.totalQuestions = questions.length;
  quizFormatted.infos.totalAnswer = quizData.length;
  quizFormatted.infos.goodAnswerNumber = trueAnswer.length;
  return quizFormatted;
};

export default quizFormateur;
