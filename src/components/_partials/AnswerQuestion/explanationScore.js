export default (questionNumber, questionData, userAnswer, language) => {
  const totalGoodAnswers = questionData.answersInfo.good;
  let userTotalGoodAnswers = 0;
  const totalBadAnswers = questionData.answersInfo.bad;
  let userTotalBadAnswers = 0;

  let label = '';
  let subtitle = '';

  // switch is a keyword, can't use it switchL = switch language
  const switchL = language === 'fr';

  for (let i = 0; i < questionData.answersInfo.total; i += 1) {
    const answer = questionData.answers[i];
    const currentQuizResponse = answer.goodAnswer;
    const currentUserResponse = userAnswer[`question${questionData.id}`][`answer${answer.id}`];
    if (currentQuizResponse && currentUserResponse) {
      userTotalGoodAnswers += 1;
    }
    else if (!currentQuizResponse && currentUserResponse) {
      userTotalBadAnswers += 1;
    }
  }

  // Backup if there's no right answers
  // (will be overwritten by the ones with wrong answers, if there's some)

  if (userTotalGoodAnswers === 0) {
    label = switchL ? 'Non' : 'Nope!';
    if (userTotalBadAnswers === 0) {
      subtitle = switchL ? 'Essaie de cliquer sur une case la prochaine fois' : 'Try clicking somewhere next time';
    }
  }

  // Only good answers
  if (totalGoodAnswers === userTotalGoodAnswers) {
    label = switchL ? 'Parfait !' : 'Perfect!';
    subtitle = switchL ? 'Ces réponses sont correctes' : 'Those answers are correct';
    if (totalGoodAnswers === 1) {
      subtitle = switchL ? 'Cette réponse est correcte' : 'That\'s the correct answer';
    }
  }

  if (userTotalGoodAnswers === 1 && userTotalGoodAnswers < totalGoodAnswers) {
    label = switchL ? 'Dommage' : 'Too bad';
    subtitle = switchL ? 'Essayez de cliquer plus de case, la prochaine fois' : 'Try clicking more cases next time';
  }

  if (userTotalGoodAnswers === 2 && userTotalGoodAnswers === 4) {
    label = switchL ? 'Oups' : 'Oops';
    subtitle = switchL ? 'Il manque la moitié des réponses' : 'Half of the answers are missing';
  }

  if (userTotalGoodAnswers === totalGoodAnswers - 1) {
    label = switchL ? 'Presque!' : 'Almost!';
    subtitle = switchL ? 'Une seule réponse manquante' : 'only one answer missing';
  }

  // Bad answers (replace the other ones if it triggered some from good answers)
  if (userTotalBadAnswers === totalBadAnswers && userTotalGoodAnswers === 0) {
    label = switchL ? 'Bravo !' : 'Congratulation!';
    subtitle = switchL ? 'Vous avez trouvé toute les mauvaises réponses ! La prochaine fois on essaiera les bonnes' : 'You found all the wrong answers! Try finding the right ones next time';
  }

  if (userTotalBadAnswers === 3) {
    label = switchL ? 'Wow !' : 'Amazing!';
    subtitle = switchL ? 'Vous avez cliqué toutes les réponses, sauf la bonne, félicitation !' : 'You clicked all the bad answers, but not the right one, that\'s impressive!';
  }

  if (userTotalBadAnswers === 2) {
    label = 'Hhhmmm';
    subtitle = switchL ? '2 mauvaises réponses' : '2 wrong answers';
    if (userTotalGoodAnswers === 0) {
      subtitle += switchL ? '... vous les choisissez au hasard ?' : '... are you choosing them randomly?';
    }
    if (userTotalGoodAnswers === 1) {
      subtitle += switchL ? '... et 1 de correcte' : '... and 1 right one';
    }
    if (userTotalGoodAnswers === 2) {
      subtitle = switchL ? 'Cliquer toute les cases ne fonctionne pas toujours' : 'Clicking all cases doesn\'t work every time';
    }
  }

  if (userTotalBadAnswers === 1) {
    label = switchL ? 'Faux !' : 'Wrong!';
    subtitle = switchL ? 'Dommage, vous avez 1 mauvaise réponse' : 'Too bad, you\'ve got 1 wrong answer';
    if (userTotalGoodAnswers === 0) {
      subtitle += switchL ? '... et aucune de correcte' : '... and no right one';
    }
    if (userTotalGoodAnswers === 1) {
      subtitle += switchL ? '... et 1 de correcte' : '... and 1 right one';
    }
    if (userTotalGoodAnswers === 2) {
      subtitle += switchL ? '... et 2 de correcte' : '... and 2 right one';
    }
    if (userTotalGoodAnswers === 3) {
      subtitle = switchL ? 'Cliquer toute les cases ne fonctionne pas toujours' : 'Clicking all cases doesn\'t work every time';
    }
  }

  return ({ label, subtitle });
};
