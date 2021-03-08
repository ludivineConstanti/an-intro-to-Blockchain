// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import './animation.scss';

// == Composant
const CheckboxAnswer = ({ oneAnswer }) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label className="checkboxAnswer">{oneAnswer.title}
    <input type="checkbox" id={oneAnswer.id} name={oneAnswer.id} value="value" />
    <span className="checkboxAnswer__checkmark" />
  </label>
);

CheckboxAnswer.propTypes = {
  oneAnswer: PropTypes.object.isRequired,
};

// == Export
export default CheckboxAnswer;
