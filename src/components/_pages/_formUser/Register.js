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

const zxcvbn = require('zxcvbn');
// == Composant
const Register = ({
  registerForm,
  changeField,
  handleRegister,
  emailError,
  hasFinishedQuiz,
  resetQuizState,
  validateQuiz,
  newPasswordError,
  emailFormatError,
  showPopUp,
  isLoggedIn,
  loading,
}) => {
  // without the language does not get updated
  const { t } = useTranslation();

  // XML won't be able to access the values if it's not outside of the function
  // because of the fonction's scope
  const [FirstnameInfos, setFirstnameInfos] = useState('');
  const [LastnameInfos, setLastnameInfos] = useState('');
  const [PasswordConfirmError, setPasswordConfirmError] = useState('');
  const [EmailError, setEmailError] = useState('');
  const [EmptyFieldError, setEmptyFieldError] = useState('');
  const [SubmitButtonClass, setSubmitButton] = useState('hidden');
  const [NewPasswordError, setNewPasswordError] = useState('');
  const [EmailFormatError, setEmailFormatError] = useState('');
  const [type, setType] = useState('password');
  const [score, setScore] = useState('null');

  const showHide = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const currentType = type === 'text' ? 'password' : 'text';
    setType(currentType);
  };

  const testStrengthPassword = (event) => {
    // we will get score property from zxcvbn
    if (event !== '') {
      const pass = zxcvbn(event);
      setScore(pass.score);
    }
    else {
      setScore('null');
    }
  };

  const handleInputOnChange = (value, name) => {
    changeField(value, 'registerForm', name);
  };

  const onChangePasswordInput = (value, name) => {
    changeField(value, 'registerForm', name);
    testStrengthPassword(value);
  };

  useEffect(() => {
    if (registerForm.firstname.length < 1 || registerForm.firstname.length > 25) {
      setFirstnameInfos(t('formUser.errorMessage.lengthFirstname'));
    }
    else setFirstnameInfos('');
    if (registerForm.lastname.length < 1 || registerForm.lastname.length > 25) {
      setLastnameInfos(t('formUser.errorMessage.lengthLastname'));
    }
    else setLastnameInfos('');
    if (registerForm.password !== registerForm.controlPassword) {
      setPasswordConfirmError(t('formUser.errorMessage.passwordsDontMatch'));
    }
    else setPasswordConfirmError('');
    if (emailError === true) {
      setEmailError(t('formUser.errorMessage.incorrectEmail'));
    }
    else setEmailError('');
    if (newPasswordError === true) {
      setNewPasswordError(t('formUser.errorMessage.incorrectNewPassword'));
    }
    else setNewPasswordError('');
    if (emailFormatError === true) {
      setEmailFormatError(t('formUser.errorMessage.emailFormatError'));
    }
    else setEmailFormatError('');
    if (registerForm.firstname !== ''
    && registerForm.lastname !== ''
    && registerForm.password === registerForm.controlPassword
    && registerForm.email !== ''
    ) {
      setSubmitButton('visible');
      setEmptyFieldError('');
    }
    else setEmptyFieldError(t('formUser.errorMessage.emptyInput'));
  });

  // Fonction to control the correspondence of passwords,
  // and lengths of firstname and lastname
  const handleSubmit = (event) => {
    event.preventDefault();
    handleRegister();
  };

  useEffect(() => {
    if (hasFinishedQuiz && isLoggedIn) {
      validateQuiz();
      resetQuizState();
    }
  }, [isLoggedIn]);

  return (
    <>
      {loading && <Loading />}
      { hasFinishedQuiz && <CloseIcon useCase="showPopUp" /> }
      { hasFinishedQuiz && showPopUp && <MessagePopUp label={t('quiz.popUp.label')} text={t('quiz.popUp.text')} useCase="registerScore" path="/" /> }
      <div className="register">
        <div className="register__login">
          <LinkButton label={t('formUser.linkLogIn')} path={!hasFinishedQuiz ? '/login' : '/quizResult/login'} className="size2" />
        </div>
        <FormUser>
          <form onSubmit={handleSubmit} className="register__columns">
            <div className="register__column">
              <p className="register__error">{FirstnameInfos}</p>
              <InputText name="firstname" type="text" placeholder={t('formUser.firstname')} value={registerForm.firstname} onChange={handleInputOnChange} />
              <p className="register__error">{LastnameInfos}</p>
              <InputText name="lastname" type="text" placeholder={t('formUser.lastname')} value={registerForm.lastname} onChange={handleInputOnChange} />
            </div>
            <div className="register__column">
              <p className="register__error">{NewPasswordError}</p>
              <div className="inputText--label-password">
                <InputText name="password" type={type} className="input-password" placeholder={t('formUser.password')} value={registerForm.password} onChange={onChangePasswordInput} />
                <span className="inputText--show-password" onClick={showHide}>{type === 'text' ? t('formUser.buttonHide') : t('formUser.buttonShow')}</span>
                <span className="inputText--strength-password" data-score={score} />
              </div>
              <p className="register__error">{PasswordConfirmError}</p>
              <InputText name="controlPassword" type={type} placeholder={t('formUser.passwordConfirmation')} value={registerForm.controlPassword} onChange={handleInputOnChange} />
              <p className="register__error">{EmailError}</p>
              <p className="register__error">{EmailFormatError}</p>
              <InputText name="email" type="email" placeholder={t('formUser.email')} value={registerForm.email} onChange={handleInputOnChange} />
              <p className="register__error">{EmptyFieldError}</p>
              <div className="register__submitButton">
                <SubmitButton className={SubmitButtonClass} label={t('formUser.buttonCreateAccount')} />
              </div>
            </div>
          </form>
        </FormUser>
      </div>
    </>
  );
};

Register.propTypes = {
  registerForm: PropTypes.object.isRequired,
  changeField: PropTypes.func,
  handleRegister: PropTypes.func,
  emailError: PropTypes.bool,
  hasFinishedQuiz: PropTypes.bool,
  validateQuiz: PropTypes.func.isRequired,
  resetQuizState: PropTypes.func.isRequired,
  newPasswordError: PropTypes.bool,
  emailFormatError: PropTypes.bool,
  showPopUp: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

Register.defaultProps = {
  changeField: () => {},
  handleRegister: () => {},
  emailError: false,
  hasFinishedQuiz: false,
  newPasswordError: false,
  emailFormatError: false,
};

export default Register;
