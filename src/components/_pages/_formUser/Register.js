// == Import npm
import React from 'react';

// == Import
import './style.scss';
import FormUser from 'src/components/_partials/FormUser';
import InputText from 'src/components/_interactives/InputText';
import SubmitButton from 'src/components/_interactives/_buttons/SubmitButton';
import LinkButton from 'src/components/_interactives/_buttons/LinkButton';

// == Composant
const Register = () => (
  <div className="register">
    <div className="register__login">
      <LinkButton label="Log in" path="/login" className="size2" />
    </div>
    <FormUser>
      <form className="register__columns">
        <div className="register__firstColumn">
          <InputText type="text" label="First Name" />
          <InputText type="text" label="Family Name" />
        </div>
        <div className="register__secondColumn">
          <InputText type="password" label="Password" />
          <InputText type="password" label="Password confirmation" />
          <InputText type="email" label="Your email address" />
          <div className="register__submitButton">
            <SubmitButton label="Create account" />
          </div>
        </div>
      </form>
    </FormUser>
  </div>
);

// == Export
export default Register;
