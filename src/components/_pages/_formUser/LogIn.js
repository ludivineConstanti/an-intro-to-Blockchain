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
import CloseIcon from 'src/containers/_interactives/_buttonsHeader/CloseIcon';
import MessagePopUp from 'src/containers/_partials/MessagePopUp';
import Loading from 'src/containers/Loading';

// == Composant
const LogIn = ({
  loginForm,
  changeField,
  handleLogin,
  loginError,
  hasFinishedQuiz,
  validateQuiz,
  resetQuizState,
  showPopUp,
  isLoggedIn,
  loading,
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

  const handleInputOnChange = (value, name) => {
    changeField(value, 'loginForm', name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };

  useEffect(() => {
    if (hasFinishedQuiz && isLoggedIn) {
      validateQuiz();
      resetQuizState();
    }
  }, [isLoggedIn]);

  return !loading ? (
    <>
      { hasFinishedQuiz && <CloseIcon useCase="showPopUp" />}
      { hasFinishedQuiz && showPopUp && <MessagePopUp label={t('quiz.popUp.label')} text={t('quiz.popUp.text')} useCase="registerScore" path="/" />}
      <div className="login">
        <div className="login__login">
          <LinkButton label={t('formUser.linkCreateAccount')} path={!hasFinishedQuiz ? '/register' : '/quizResult/register'} className="size2" />
        </div>
        <FormUser>
          <form onSubmit={handleSubmit} className="login__columns">
            <div className="login__column">
              <InputText name="email" type="email" placeholder={t('formUser.email')} value={loginForm.email} onChange={handleInputOnChange} />
            </div>
            <div className="login__column">
              <InputText name="password" type={type} placeholder={t('formUser.password')} value={loginForm.password} onChange={handleInputOnChange} />
              <span className="inputText--show-password-1" onClick={showHide}>{type === 'text' ? 'Hide' : 'Show'}</span>
              <div className="login__submitButton">
                <p className="login__error">{Error}</p>
                <SubmitButton label={t('formUser.logIn')} />
              </div>
            </div>
          </form>
        </FormUser>
      </div>
    </>
  ) : <Loading />;
};

LogIn.propTypes = {
  loginForm: PropTypes.object.isRequired,
  changeField: PropTypes.func,
  handleLogin: PropTypes.func,
  loginError: PropTypes.bool,
  hasFinishedQuiz: PropTypes.bool,
  validateQuiz: PropTypes.func.isRequired,
  resetQuizState: PropTypes.func.isRequired,
  showPopUp: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

LogIn.defaultProps = {
  loginError: false,
  changeField: () => {},
  handleLogin: () => {},
  hasFinishedQuiz: false,
};

// == Export
export default LogIn;
