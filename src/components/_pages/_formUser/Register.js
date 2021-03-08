// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import FormUser from 'src/components/_partials/FormUser';
import InputText from 'src/components/_interactives/InputText';
import SubmitButton from 'src/components/_interactives/_buttons/SubmitButton';
import LinkButton from 'src/components/_interactives/_buttons/LinkButton';

// == Composant
const Register = ({
  registerForm,
  changeField,
  handleRegister,
}) => {
  // XML won't be able to access the values if it's not outside of the function
  // because of the fonction's scope
  const [firstnameError, setFirstnameError] = useState('');
  const [lastnameError, setLastnameError] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');

  // Fonction to control the correspondence of passwords,
  // and lengths of firstname and lastname
  const handleSubmit = (event) => {
    event.preventDefault();
    if (registerForm.password !== registerForm.controlPassword
      || (registerForm.firstname.length < 1 || registerForm.firstname.length > 25)
      || (registerForm.lastname.length < 1 || registerForm.lastname.length > 25)) {
      if (registerForm.password !== registerForm.controlPassword) {
        setPasswordConfirmError('Passwords do not match');
      }
      if (registerForm.firstname.length < 1 || registerForm.firstname.length > 25) {
        setFirstnameError('Your first name must have between 1 and 25 characters');
      }
      if (registerForm.lastname.length < 1 || registerForm.lastname.length > 25) {
        setLastnameError('Your last name must have between 1 and 25 characters');
      }
    }
    else {
      handleRegister();
    }
  };

  return (
    <>
      <div className="register">
        <div className="register__login">
          <LinkButton label="Log in" path="/login" className="size2" />
        </div>
        <FormUser>
          <form onSubmit={handleSubmit} className="register__columns">
            <div className="register__column">
              <p className="register__error">{firstnameError}</p>
              <InputText name="firstname" type="text" placeholder="First Name" value={registerForm.firstname} onChange={changeField} />
              <p className="register__error">{lastnameError}</p>
              <InputText name="lastname" type="text" placeholder="Family Name" value={registerForm.lastname} onChange={changeField} />
            </div>
            <div className="register__column">
              <p className="register__error">{passwordConfirmError}</p>
              <InputText name="password" type="password" placeholder="Password" value={registerForm.password} onChange={changeField} />
              <InputText name="controlPassword" type="password" placeholder="Password confirmation" value={registerForm.controlPassword} onChange={changeField} />
              <InputText name="email" type="email" placeholder="Your email address" value={registerForm.email} onChange={changeField} />
              <div className="register__submitButton">
                <SubmitButton label="Create account" />
              </div>
            </div>
          </form>
        </FormUser>
      </div>
    </>
  );
};

Register.propTypes = {
  registerForm: PropTypes.object.isRequired,
  changeField: PropTypes.func,
  handleRegister: PropTypes.func,
};

Register.defaultProps = {
  changeField: () => {},
  handleRegister: () => {},
};

export default Register;
