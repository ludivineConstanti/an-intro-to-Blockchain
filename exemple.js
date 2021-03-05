let quiz = {
  progressionbar: {
    totalNum: 0, //! Nombre de question total
    progressionNum: 0, //! Numéro de la question actuelle
  },
  formQuestion: {
    Question: 'Blabla ?', //! intitulé de la question
    HowmanyGoodAnswer: 'String', //! Message changeant en fonction du nombre de bonne réponse pour cette question
    checkboxAnswer: {
      Proposition_de_reponse: 'string', //! Intitulé
      ID: 228, //! Id de la question
      name: 228, //! ID de la question
      value: true, //! Pour la version intermédiaire, si la proposition est vraie ou fausse
    },
  },
  answerQuestion: {
    titlePage: 'string', //! qui change en fonction de si on a bien répondu ou non
    justification: 'string', //! Justification de la question
    linkArticle: 'string', //! Le lien de l'article
    QuestionNumber: 7, //! Le numéro de la question actuelle, besoin du nombre totale
  },
};

let quizResult = {
  linkButton: {
    score: 100, //! Calculé avec le nombre de réponses juste et le nombre de bonne réponses trouvés.
  },
};

const quizObject = {
  infos: { //! Cet objet est optionnel, si les infos sont trop chiantes à récupérer, pas grave
    name: 'string, nom du quiz',
    goodAnswerNumbers: 21,
  },
  question1: {
    id: 28,
    intitule_de_la_question: 'string',
    justification: 'string',
    linkArticle: 'string du lien',
    proposition1: {
      id: 229,
      name: 'string de la proposition',
      good: false, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition2: {
      id: 230,
      name: 'string de la proposition',
      good: true, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition3: {
      id: 231,
      name: 'string de la proposition',
      good: false, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition4: {
      id: 232,
      name: 'string de la proposition',
      good: true, //! Temporaire, le but est de l'enlever à la fin
    },
  },
  question2: {
    id: 29,
    intitule_de_la_question: 'string',
    justification: 'string',
    linkArticle: 'string du lien',
    proposition1: {
      id: 229,
      name: 'string de la proposition',
      good: false, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition2: {
      id: 230,
      name: 'string de la proposition',
      good: true, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition3: {
      id: 231,
      name: 'string de la proposition',
      good: false, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition4: {
      id: 232,
      name: 'string de la proposition',
      good: true, //! Temporaire, le but est de l'enlever à la fin
    },
  },
  question3: {
    id: 30,
    intitule_de_la_question: 'string',
    justification: 'string',
    linkArticle: 'string du lien',
    proposition1: {
      id: 229,
      name: 'string de la proposition',
      good: false, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition2: {
      id: 230,
      name: 'string de la proposition',
      good: true, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition3: {
      id: 231,
      name: 'string de la proposition',
      good: false, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition4: {
      id: 232,
      name: 'string de la proposition',
      good: true, //! Temporaire, le but est de l'enlever à la fin
    },
  },
  question4: {
    id: 31,
    intitule_de_la_question: 'string',
    justification: 'string',
    linkArticle: 'string du lien',
    proposition1: {
      id: 229,
      name: 'string de la proposition',
      good: false, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition2: {
      id: 230,
      name: 'string de la proposition',
      good: true, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition3: {
      id: 231,
      name: 'string de la proposition',
      good: false, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition4: {
      id: 232,
      name: 'string de la proposition',
      good: true, //! Temporaire, le but est de l'enlever à la fin
    },
  },
  question5: {
    id: 32,
    intitule_de_la_question: 'string',
    justification: 'string',
    linkArticle: 'string du lien',
    proposition1: {
      id: 229,
      name: 'string de la proposition',
      good: false, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition2: {
      id: 230,
      name: 'string de la proposition',
      good: true, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition3: {
      id: 231,
      name: 'string de la proposition',
      good: false, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition4: {
      id: 232,
      name: 'string de la proposition',
      good: true, //! Temporaire, le but est de l'enlever à la fin
    },
  },
  question6: {
    id: 33,
    intitule_de_la_question: 'string',
    justification: 'string',
    linkArticle: 'string du lien',
    proposition1: {
      id: 229,
      name: 'string de la proposition',
      good: false, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition2: {
      id: 230,
      name: 'string de la proposition',
      good: true, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition3: {
      id: 231,
      name: 'string de la proposition',
      good: false, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition4: {
      id: 232,
      name: 'string de la proposition',
      good: true, //! Temporaire, le but est de l'enlever à la fin
    },
  },
  question7: {
    id: 34,
    intitule_de_la_question: 'string',
    justification: 'string',
    linkArticle: 'string du lien',
    proposition1: {
      id: 229,
      name: 'string de la proposition',
      good: false, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition2: {
      id: 230,
      name: 'string de la proposition',
      good: true, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition3: {
      id: 231,
      name: 'string de la proposition',
      good: false, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition4: {
      id: 232,
      name: 'string de la proposition',
      good: true, //! Temporaire, le but est de l'enlever à la fin
    },
  },
  question8: {
    id: 35,
    intitule_de_la_question: 'string',
    justification: 'string',
    linkArticle: 'string du lien',
    proposition1: {
      id: 229,
      name: 'string de la proposition',
      good: false, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition2: {
      id: 230,
      name: 'string de la proposition',
      good: true, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition3: {
      id: 231,
      name: 'string de la proposition',
      good: false, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition4: {
      id: 232,
      name: 'string de la proposition',
      good: true, //! Temporaire, le but est de l'enlever à la fin
    },
  },
  question9: {
    id: 36,
    intitule_de_la_question: 'string',
    justification: 'string',
    linkArticle: 'string du lien',
    proposition1: {
      id: 229,
      name: 'string de la proposition',
      good: false, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition2: {
      id: 230,
      name: 'string de la proposition',
      good: true, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition3: {
      id: 231,
      name: 'string de la proposition',
      good: false, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition4: {
      id: 232,
      name: 'string de la proposition',
      good: true, //! Temporaire, le but est de l'enlever à la fin
    },
  },
  question10: {
    id: 37,
    intitule_de_la_question: 'string',
    justification: 'string',
    linkArticle: 'string du lien',
    proposition1: {
      id: 229,
      name: 'string de la proposition',
      good: false, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition2: {
      id: 230,
      name: 'string de la proposition',
      good: true, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition3: {
      id: 231,
      name: 'string de la proposition',
      good: false, //! Temporaire, le but est de l'enlever à la fin
    },
    proposition4: {
      id: 232,
      name: 'string de la proposition',
      good: true, //! Temporaire, le but est de l'enlever à la fin
    },
  },
};

export default quizObject;

quiz = quizResult;

quizResult = quiz;
