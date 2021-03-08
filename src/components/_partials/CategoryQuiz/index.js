// == Import npm
import React from 'react';

// == Import
import './style.scss';
import TitleCategory from 'src/components/_statics/TitleCategory';
import LinkCTA from 'src/components/_interactives/LinkCTA';

// == Composant
const CategoryQuiz = (oneCategory) => (
  <div className="categoryQuiz">
    <TitleCategory label={oneCategory[0][0].category_name} />
    <div className="categoryQuiz__groupLinks">
      <div className="categoryQuiz__linkCTA">
        {
          oneCategory[0].map((oneQuiz) => (
            <LinkCTA key={oneQuiz.quiz_id} {...{ oneQuiz }} />
          ))
        }
      </div>
    </div>
  </div>
);

// == Export
export default CategoryQuiz;
