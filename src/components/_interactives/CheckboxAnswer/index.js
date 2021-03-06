// == Import npm
import React from 'react';

// == Import
import './style.scss';
import './animation.scss';

// == Composant
const CheckboxAnswer = () => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label className="checkboxAnswer">Proposition de réponse
    <input type="checkbox" id="id1" name="question1" value="value" />
    <span className="checkboxAnswer__checkmark" />
  </label>
);

// == Export
export default CheckboxAnswer;
