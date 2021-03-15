// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

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
  loginError,
}) => {
  // without the language does not get updated
  const { t } = useTranslation();

  const [Error, setError] = useState('');
  const [type, setType] = useState('password');

  const showHide = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const currentType = type === 'text' ? 'password' : 'text';
    setType(currentType);
  };

  // Control fields with side effects
  useEffect(() => {
    if (loginError === true) {
      setError(t('formUser.errorMessage.login'));
    }
    else {
      setError('');
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };
  return (
    <div className="login">
      <div className="login__login">
        <LinkButton label={t('formUser.linkCreateAccount')} path="/register" className="size2" />
      </div>
      <FormUser>
        <form onSubmit={handleSubmit} className="login__columns">
          <div className="login__column">
            <InputText name="email" type="email" placeholder={t('formUser.email')} value={loginForm.email} onChange={changeField} />
          </div>
          <div className="login__column">
            <InputText name="password" type={type} placeholder={t('formUser.password')} value={loginForm.password} onChange={changeField} />
            <span className="inputText--show-password-1" onClick={showHide}>{type === 'text' ? 'Hide' : 'Show'}</span>
            <div className="login__submitButton">
              <p className="login__error">{Error}</p>
              <SubmitButton label={t('formUser.logIn')} />
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
  loginError: PropTypes.bool,
};

LogIn.defaultProps = {
  loginError: false,
  changeField: () => {},
  handleLogin: () => {},
};

// == Export
export default LogIn;
