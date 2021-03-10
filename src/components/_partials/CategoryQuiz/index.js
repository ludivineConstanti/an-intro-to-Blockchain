// == Import npm
import React from 'react';

// == Import
import './style.scss';
import TitleCategory from 'src/components/_statics/TitleCategory';
import LinkCTA from 'src/components/_interactives/LinkCTA';

// == Composant
const CategoryQuiz = ({ title, content }) => {
  const quizLinks = content.map((quiz) => (
    <LinkCTA
      key={quiz.quiz_id}
      quizId={quiz.quiz_id}
      categoryId={quiz.categoryId}
      label={quiz.quiz_title}
      externalLink
    />
  ));
  return (
    <div className="categoryQuiz">
      <TitleCategory label={title} />
      <div className="categoryQuiz__groupLinks">
        <div className="categoryQuiz__linkCTA">
          { quizLinks }
        </div>
      </div>
    </div>
  );
};

// == Export
export default CategoryQuiz;
