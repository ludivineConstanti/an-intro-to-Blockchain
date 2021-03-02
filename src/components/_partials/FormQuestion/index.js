// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import CheckboxAnswer from 'src/components/_interactives/CheckboxAnswer';
import SubmitButton from 'src/components/_interactives/_buttons/SubmitButton';

// == Composant
const FormQuestion = () => (
  <div className="formQuestion">
    <h3 className="formQuestion__text">Question</h3>
    <p className="formQuestion__instruction">(more than one answer can be right)</p>
    <CheckboxAnswer />
    <CheckboxAnswer />
    <CheckboxAnswer />
    <CheckboxAnswer />
    <SubmitButton label="Submit" />
  </div>
);

/* CategoryQuiz.propTypes = {
  label: PropTypes.string.isRequired,
}; */

// == Export
export default FormQuestion;
