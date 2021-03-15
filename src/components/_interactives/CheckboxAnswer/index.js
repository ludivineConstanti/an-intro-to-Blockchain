// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import './animation.scss';

// == Composant
const CheckboxAnswer = ({ oneAnswer, disabled }) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label className={disabled
    ? `checkboxAnswer checkboxAnswer--${oneAnswer.goodAnswer}`
    : 'checkboxAnswer checkboxAnswer--hoverPossible'}
  >
    {oneAnswer.name}
    <input type="checkbox" id={oneAnswer.id} name={oneAnswer.id} disabled={disabled} />
    <span className={disabled
      ? `checkboxAnswer__checkmark checkboxAnswer__checkmark--${oneAnswer.goodAnswer}`
      : 'checkboxAnswer__checkmark checkboxAnswer__checkmark--hoverPossible'}
    />
  </label>
);

CheckboxAnswer.propTypes = {
  oneAnswer: PropTypes.object.isRequired,
  disabled: PropTypes.bool.isRequired,
};

// == Export
export default CheckboxAnswer;
