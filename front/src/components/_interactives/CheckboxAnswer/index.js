// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// == Composant
const CheckboxAnswer = () => (
  <label className="checkboxAnswer">
    <input type="checkbox" id="id1" name="question1" value="value" />
    <span htmlFor="id1">Proposition de réponse</span>
  </label>
);

/* CategoryQuiz.propTypes = {
  label: PropTypes.string.isRequired,
}; */

// == Export
export default CheckboxAnswer;
