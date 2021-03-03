// == Import npm
import React from 'react';

// == Import
import './style.scss';
import FormUser from 'src/components/_partials/FormUser';
import InputText from 'src/components/_interactives/InputText';
import SubmitButton from 'src/components/_interactives/_buttons/SubmitButton';
import LinkButton from 'src/components/_interactives/_buttons/LinkButton';

// == Composant
const Login = () => (
  <div className="login">
    <div className="login__login">
      <LinkButton label="Create a new account" path="/register" className="size2" />
    </div>
    <FormUser>
      <form className="login__columns">
        <div className="login__firstColumn">
          <InputText type="email" label="email address" />
        </div>
        <div className="login__secondColumn">
          <InputText type="password" label="Password" />
          <div className="login__submitButton">
            <SubmitButton label="Log in" />
          </div>
        </div>
      </form>
    </FormUser>
  </div>
);

// == Export
export default Login;
