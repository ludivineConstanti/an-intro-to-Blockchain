// == Import npm
import React from 'react';
import { useTranslation } from 'react-i18next';

// == Import
import './style.scss';
import './animation.scss';
import Icon from 'src/components/_statics/Icon';
import ProgressBar from 'src/components/_partials/CategoryAchievement/ProgressBar';

// == Composant
const QuizAchievements = () => {
  // without the language does not get updated
  const { t } = useTranslation();
  return (
    <div className="quizAchievement">
      <h3 className="quizAchievement__quizTitle">Quiz name</h3>
      <div className="quizAchievement__frame">
        <div className="quizAchievement__iconDiv">
          <Icon category={1} quiz={1} />
          <svg className="quizAchievement__iconDiv__withBorders" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10.5V5.09619L4.59619 0.5H10V4.5H4V10.5H0Z" fill="white" />
            <path d="M80 70.5L80 75.9038L75.4038 80.5L70 80.5L70 76.5L76 76.5L76 70.5L80 70.5Z" fill="white" />
            <path d="M10 80.5L4.59619 80.5L-2.00906e-07 75.9038L-4.37114e-07 70.5L4 70.5L4 76.5L10 76.5L10 80.5Z" fill="white" />
            <path d="M70 0.500001L75.4038 0.500001L80 5.09619L80 10.5L76 10.5L76 4.5L70 4.5L70 0.500001Z" fill="white" />
            <path className="quizAchievement__iconDiv__transparentBorders" fillRule="evenodd" clipRule="evenodd" d="M5 0.500003V2.5L75 2.5V0.5L5 0.500003ZM2 5.5H0V75.5H2V5.5ZM5 78.5V80.5H75V78.5H5ZM78 5.5H80V75.5H78V5.5Z" fill="white" />
          </svg>
          <svg className="quizAchievement__iconDiv__withoutBorders" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
            <g className="quizAchievement__iconDiv__transparentCorners">
              <path d="M0 10.5V5.09619L4.59619 0.5H10V4.5H4V10.5H0Z" fill="white" />
              <path d="M80 70.5L80 75.9038L75.4038 80.5L70 80.5L70 76.5L76 76.5L76 70.5L80 70.5Z" fill="white" />
              <path d="M10 80.5L4.59619 80.5L-2.00906e-07 75.9038L-4.37114e-07 70.5L4 70.5L4 76.5L10 76.5L10 80.5Z" fill="white" />
              <path d="M70 0.500001L75.4038 0.500001L80 5.09619L80 10.5L76 10.5L76 4.5L70 4.5L70 0.500001Z" fill="white" />
            </g>
          </svg>
        </div>
        <ProgressBar percentage={80} />
      </div>
    </div>
  );
};

// == Export
export default QuizAchievements;
