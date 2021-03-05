// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
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
}) => {
  // Fonction to control the correspondence of passwords,
  // and lengths of firstname and lastname
  // if there is an error, we inject an innerHTML into the form
  const handleSubmit = (event) => {
    event.preventDefault();

    const firstnameError = document.querySelector('.firstname-error');
    const lastnameError = document.querySelector('.lastname-error');
    const passwordConfirmError = document.querySelector('.password__confirm-error');

    firstnameError.innerHTML = '';
    lastnameError.innerHTML = '';
    passwordConfirmError.innerHTML = '';

    if (password !== controlPassword
      || (firstname.length < 1 || firstname.length > 25)
      || (lastname.length < 1 || lastname.length > 25)) {
      if (password !== controlPassword) {
        passwordConfirmError.innerHTML = 'Passwords do not match';
      }
      if (firstname.length < 1 || firstname.length > 25) {
        firstnameError.innerHTML = 'Your first name must have between 1 to 25 characters';
      }
      if (lastname.length < 1 || lastname.length > 25) {
        lastnameError.innerHTML = 'Your last name must have between 1 to 25 characters';
      }
    }
    else {
      handleRegister();
    }
  };

  return (
    <div className="register">
      <div className="register__login">
        <LinkButton label="Log in" path="/login" className="size2" />
      </div>
      <FormUser>
        <form onSubmit={handleSubmit} className="register__columns">
          <div className="register__firstColumn">
            <InputText name="firstname" type="text" placeholder="First Name" value={firstname} onChange={changeField} />
            <div className="firstname-error"> </div>
            <InputText name="lastname" type="text" placeholder="Family Name" value={lastname} onChange={changeField} />
            <div className="lastname-error"> </div>
          </div>
          <div className="register__secondColumn">
            <InputText name="password" type="password" placeholder="Password" value={password} onChange={changeField} />
            <InputText name="controlPassword" type="password" placeholder="Password confirmation" value={controlPassword} onChange={changeField} />
            <div className="password__confirm-error"> </div>
            <InputText name="email" type="email" placeholder="Your email address" value={email} onChange={changeField} />
            <div className="register__submitButton">
              <SubmitButton label="Create account" />
            </div>
          </div>
        </form>
      </FormUser>
    </div>
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
};

Register.defaultProps = {
  firstname: '',
  lastname: '',
  password: '',
  controlPassword: '',
  email: '',
  changeField: () => {},
  handleRegister: () => {},
};

export default Register;
