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
  // if there is an error, we inject an innerHTML
  const handleSubmit = (event) => {
    event.preventDefault();
    const passwordConfirmError = document.querySelector('.password__confirm-error');

    if (password !== controlPassword) {
      passwordConfirmError.innerHTML = 'Les mots de passe ne correspondent pas';
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
            <InputText name="lastname" type="text" placeholder="Family Name" value={lastname} onChange={changeField} />
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

// == Export
export default Register;
