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
const LogIn = ({ email, password, changeField }) => (
  <div className="login">
    <div className="login__login">
      <LinkButton label="Create a new account" path="/register" className="size2" />
    </div>
    <FormUser>
      <div className="login__firstColumn">
        <InputText name="email" type="email" placeholder="Email" value={email} onChange={changeField} />
      </div>
      <div className="login__secondColumn">
        <InputText name="password" type="password" placeholder="Password" value={password} onChange={changeField} />
        <div className="login__submitButton">
          <SubmitButton label="Log in" />
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

LogIn.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
};

// == Export
export default LogIn;
