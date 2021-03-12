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
const Register = ({
  registerForm,
  changeField,
  handleRegister,
  emailError,
}) => {
  // without the language does not get updated
  const { t } = useTranslation();

  // XML won't be able to access the values if it's not outside of the function
  // because of the fonction's scope
  const [FirstnameError, setFirstnameError] = useState('');
  const [LastnameError, setLastnameError] = useState('');
  const [PasswordConfirmError, setPasswordConfirmError] = useState('');
  const [EmailError, setEmailError] = useState('');

  useEffect(() => {
    if (registerForm.firstname.length < 1 || registerForm.firstname.length > 25) {
      setFirstnameError(t('formUser.errorMessage.lengthFirstname'));
    }
    else setFirstnameError('');
    if (registerForm.lastname.length < 1 || registerForm.lastname.length > 25) {
      setLastnameError(t('formUser.errorMessage.lengthLastname'));
    }
    else setLastnameError('');
    if (registerForm.password !== registerForm.controlPassword) {
      setPasswordConfirmError(t('formUser.errorMessage.passwordsDontMatch'));
    }
    else setPasswordConfirmError('');
    if (emailError === true) {
      setEmailError(t('formUser.errorMessage.incorrectEmail'));
    }
    else setEmailError('');
  });

  // Fonction to control the correspondence of passwords,
  // and lengths of firstname and lastname
  const handleSubmit = (event) => {
    event.preventDefault();
    handleRegister();
  };

  return (
    <>
      <div className="register">
        <div className="register__login">
          <LinkButton label={t('formUser.linkLogIn')} path="/login" className="size2" />
        </div>
        <FormUser>
          <form onSubmit={handleSubmit} className="register__columns">
            <div className="register__column">
              <p className="register__error">{FirstnameError}</p>
              <InputText name="firstname" type="text" placeholder={t('formUser.firstname')} value={registerForm.firstname} onChange={changeField} />
              <p className="register__error">{LastnameError}</p>
              <InputText name="lastname" type="text" placeholder={t('formUser.lastname')} value={registerForm.lastname} onChange={changeField} />
            </div>
            <div className="register__column">
              <p className="register__error">{PasswordConfirmError}</p>
              <InputText name="password" type="password" placeholder={t('formUser.password')} value={registerForm.password} onChange={changeField} />
              <InputText name="controlPassword" type="password" placeholder={t('formUser.passwordConfirmation')} value={registerForm.controlPassword} onChange={changeField} />
              <p className="register__error">{EmailError}</p>
              <InputText name="email" type="email" placeholder={t('formUser.email')} value={registerForm.email} onChange={changeField} />
              <div className="register__submitButton">
                <SubmitButton label={t('formUser.buttonCreateAccount')} />
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
};

Register.defaultProps = {
  changeField: () => {},
  handleRegister: () => {},
  emailError: false,
};

export default Register;
