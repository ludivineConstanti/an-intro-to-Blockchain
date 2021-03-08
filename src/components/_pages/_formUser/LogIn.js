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
const LogIn = ({
  loginForm,
  changeField,
  handleLogin,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };
  return (
    <div className="login">
      <div className="login__login">
        <LinkButton label="Create a new account" path="/register" className="size2" />
      </div>
      <FormUser>
        <form onSubmit={handleSubmit} className="login__columns">
          <div className="login__column">
            <InputText name="email" type="email" placeholder="Email" value={loginForm.email} onChange={changeField} />
          </div>
          <div className="login__column">
            <InputText name="password" type="password" placeholder="Password" value={loginForm.password} onChange={changeField} />
            <div className="login__submitButton">
              <SubmitButton label="Log in" />
            </div>
          </div>
        </form>
      </FormUser>
    </div>
  );
};

LogIn.propTypes = {
  loginForm: PropTypes.object.isRequired,
  changeField: PropTypes.func,
  handleLogin: PropTypes.func,
};

LogIn.defaultProps = {
  changeField: () => {},
  handleLogin: () => {},
};

// == Export
export default LogIn;
