// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import './animation.scss';

// == Composant
const CheckboxAnswer = ({ oneAnswer, disabled }) => {
  const exist = (
    (oneAnswer.goodAnswer === false
    || oneAnswer.goodAnswer === true)
    && (oneAnswer.userAnswer === false
    || oneAnswer.userAnswer === true));

  const content = (
    <>
      <input type="checkbox" id={oneAnswer.id} name={oneAnswer.id} disabled={disabled} />
      <span className="checkboxAnswer__checkmark" />
    </>
  );

  return (
    exist
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      ? <label className={oneAnswer.goodAnswer === oneAnswer.userAnswer ? 'checkboxAnswer ok' : 'checkboxAnswer nop'}>{oneAnswer.title}{content}</label>
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      : <label className="checkboxAnswer shit">{oneAnswer.title}{content}</label>
  );
};

CheckboxAnswer.propTypes = {
  oneAnswer: PropTypes.object.isRequired,
  disabled: PropTypes.bool.isRequired,
};

// == Export
export default CheckboxAnswer;
