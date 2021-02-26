// == Import npm
import React from 'react';
import Quiz from 'src/components/Quiz';

// == Import
import './style.scss';

//! DONNÉES TEMPORAIRES, A SUPPRIMER VITE
const quizzes = [
  {
    id: 1,
    category: 'histoire du bitcoin',
    title: 'truc',
    question: [
      {
        id: 1,
        label: 'question 1',
        article_link: 'https://i0.wp.com/foutucode.fr/wp-content/uploads/2020/01/3mkhz8-1.jpg?w=888&ssl=1',
        justification: 'notre petite réponse magique',
        proposal: [
          {
            id: 1,
            title: 'propos 1',
            true: false,
          },
          {
            id: 2,
            title: 'propos 2',
            true: false,
          },
          {
            id: 3,
            title: 'propos 3',
            true: true,
          },
          {
            id: 4,
            title: 'propos 3',
            true: false,
          },
        ],
      },
      {
        id: 2,
        label: 'question 2',
        article_link: 'https://i0.wp.com/foutucode.fr/wp-content/uploads/2020/01/3mkhz8-1.jpg?w=888&ssl=1',
        justification: 'notre petite réponse magique',
        proposal: [
          {
            id: 1,
            title: 'propos 1',
            true: false,
          },
          {
            id: 2,
            title: 'propos 2',
            true: false,
          },
          {
            id: 3,
            title: 'propos 3',
            true: true,
          },
          {
            id: 4,
            title: 'propos 3',
            true: false,
          },
        ],
      },
      {
        id: 3,
        label: 'question 3',
        article_link: 'https://i0.wp.com/foutucode.fr/wp-content/uploads/2020/01/3mkhz8-1.jpg?w=888&ssl=1',
        justification: 'notre petite réponse magique',
        proposal: [
          {
            id: 1,
            title: 'propos 1',
            true: false,
          },
          {
            id: 2,
            title: 'propos 2',
            true: false,
          },
          {
            id: 3,
            title: 'propos 3',
            true: true,
          },
          {
            id: 4,
            title: 'propos 3',
            true: false,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    category: 'histoire du ethereum',
    title: 'truc mais machin aussi',
    question: [
      {
        id: 1,
        label: 'question 1',
        article_link: 'https://i0.wp.com/foutucode.fr/wp-content/uploads/2020/01/3mkhz8-1.jpg?w=888&ssl=1',
        justification: 'notre petite réponse magique',
        proposal: [
          {
            id: 1,
            title: 'propos 1',
            true: false,
          },
          {
            id: 2,
            title: 'propos 2',
            true: false,
          },
          {
            id: 3,
            title: 'propos 3',
            true: true,
          },
          {
            id: 4,
            title: 'propos 3',
            true: false,
          },
        ],
      },
      {
        id: 2,
        label: 'question 2',
        article_link: 'https://i0.wp.com/foutucode.fr/wp-content/uploads/2020/01/3mkhz8-1.jpg?w=888&ssl=1',
        justification: 'notre petite réponse magique',
        proposal: [
          {
            id: 1,
            title: 'propos 1',
            true: false,
          },
          {
            id: 2,
            title: 'propos 2',
            true: false,
          },
          {
            id: 3,
            title: 'propos 3',
            true: true,
          },
          {
            id: 4,
            title: 'propos 3',
            true: false,
          },
        ],
      },
      {
        id: 3,
        label: 'question 3',
        article_link: 'https://i0.wp.com/foutucode.fr/wp-content/uploads/2020/01/3mkhz8-1.jpg?w=888&ssl=1',
        justification: 'notre petite réponse magique',
        proposal: [
          {
            id: 1,
            title: 'propos 1',
            true: false,
          },
          {
            id: 2,
            title: 'propos 2',
            true: false,
          },
          {
            id: 3,
            title: 'propos 3',
            true: true,
          },
          {
            id: 4,
            title: 'propos 3',
            true: false,
          },
        ],
      },
    ],
  },
];

// == Composant
const Quizzes = () => (
  <>
    <h1 className="quizlol">PAGE AVEC TOUS LES QUIZ</h1>
    {quizzes.map((quiz) => (
      <Quiz {...quiz} questionNumber={quiz.question.length} key={quiz.id} />
    ))}
  </>
);

// == Export
export default Quizzes;
