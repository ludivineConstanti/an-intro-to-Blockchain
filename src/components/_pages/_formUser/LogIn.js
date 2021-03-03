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
      <LinkButton label="Log in" path="/login" className="size2" />
    </div>
    <FormUser>
      <div className="login__firstColumn">
        <InputText type="text" value="First Name" />
        <InputText type="text" value="Family Name" />
      </div>
      <div className="login__secondColumn">
        <InputText type="password" value="Password" />
        <InputText type="password" value="Password confirmation" />
        <InputText type="email" value="Your email address" />
        <div className="login__submitButton">
          <SubmitButton label="Create account" />
        </div>
      </div>
    </FormUser>
  </div>
);

// == Export
export default Login;
