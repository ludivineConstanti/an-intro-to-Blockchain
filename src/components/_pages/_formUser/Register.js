// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import LogIn from 'src/components/_pages/_formUser/LogIn';
import FormUser from 'src/components/_partials/FormUser';
import InputText from 'src/components/_interactives/InputText';
import SubmitButton from 'src/components/_interactives/_buttons/SubmitButton';
import LinkButton from 'src/components/_interactives/_buttons/LinkButton';

// == Composant
const Register = ({
  firstname,
  lastname,
  password,
  controlPassword,
  email,
  changeField,
  handleRegister,
  formSubmit,
  handleFormSubmit,
}) => {
  // XML won't be able to access the values if it's not outside of the function
  // because of the fonction's scope
  const [firstnameError, setFirstnameError] = useState('');
  const [lastnameError, setLastnameError] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');

  // Fonction to control the correspondence of passwords,
  // and lengths of firstname and lastname
  // if there is an error, we inject an innerHTML into the form
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== controlPassword
      || (firstname.length < 1 || firstname.length > 25)
      || (lastname.length < 1 || lastname.length > 25)) {
      if (password !== controlPassword) {
        setPasswordConfirmError('Passwords do not match');
      }
      if (firstname.length < 1 || firstname.length > 25) {
        setFirstnameError('Your first name must have between 1 and 25 characters');
      }
      if (lastname.length < 1 || lastname.length > 25) {
        setLastnameError('Your last name must have between 1 and 25 characters');
      }
    }
    else {
      handleRegister();
      handleFormSubmit();
    }
  };

  return (
    <>
      {formSubmit ? (
        <LogIn />
      ) : (
        <div className="register">
          <div className="register__login">
            <LinkButton label="Log in" path="/login" className="size2" />
          </div>
          <FormUser>
            <form onSubmit={handleSubmit} className="register__columns">
              <div className="register__column">
                <p className="register__error">{firstnameError}</p>
                <InputText name="firstname" type="text" placeholder="First Name" value={firstname} onChange={changeField} />
                <p className="register__error">{lastnameError}</p>
                <InputText name="lastname" type="text" placeholder="Family Name" value={lastname} onChange={changeField} />
              </div>
              <div className="register__column">
                <p className="register__error">{passwordConfirmError}</p>
                <InputText name="password" type="password" placeholder="Password" value={password} onChange={changeField} />
                <InputText name="controlPassword" type="password" placeholder="Password confirmation" value={controlPassword} onChange={changeField} />
                <InputText name="email" type="email" placeholder="Your email address" value={email} onChange={changeField} />
                <div className="register__submitButton">
                  <SubmitButton label="Create account" />
                </div>
              </div>
            </form>
          </FormUser>
        </div>
      )}
    </>
  );
};

Register.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  password: PropTypes.string,
  controlPassword: PropTypes.string,
  email: PropTypes.string,
  changeField: PropTypes.func,
  handleRegister: PropTypes.func,
  formSubmit: PropTypes.bool,
  handleFormSubmit: PropTypes.func,
};

Register.defaultProps = {
  firstname: '',
  lastname: '',
  password: '',
  controlPassword: '',
  email: '',
  changeField: () => {},
  handleRegister: () => {},
  formSubmit: () => {},
  handleFormSubmit: () => {},
};

export default Register;
