// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// == Import
import './style.scss';
import TitlePage from 'src/components/_statics/TitlePage';
import FormUser from 'src/components/_partials/FormUser';
import InputText from 'src/components/_interactives/InputText';
import SubmitButton from 'src/components/_interactives/_buttons/SubmitButton';
import LinkButton from 'src/components/_interactives/_buttons/LinkButton';
import Loading from 'src/containers/Loading';
// == Composant

const Settings = ({
  handleLogout,
  firstname,
  lastname,
  changeField,
  settingsForms,
  handleChangeSettings,
  handleChangeEmail,
  handleDeleteUser,
  incorrectPasswordError,
  newPasswordError,
  emailError,
  emailFormatError,
  loading,
}) => {
  // without the language does not get updated
  const { t } = useTranslation();

  const [PasswordConfirmError, setPasswordConfirmError] = useState('');
  const [IncorrectPasswordError, setIncorrectPasswordError] = useState('');
  const [NewPasswordError, setNewPasswordError] = useState('');
  const [EmailError, setEmailError] = useState('');
  const [typeFormNewPassword, setTypeFormNewPassword] = useState('password');
  const [typeFormNewEmail, setTypeFormNewEmail] = useState('password');
  const [typeFormDelete, setTypeFormDelete] = useState('password');
  const [EmailFormatError, setEmailFormatError] = useState('');

  const showHideForm1 = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const currentType = typeFormNewPassword === 'text' ? 'password' : 'text';
    setTypeFormNewPassword(currentType);
  };

  const showHideForm2 = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const currentType = typeFormNewEmail === 'text' ? 'password' : 'text';
    setTypeFormNewEmail(currentType);
  };

  const showHideForm3 = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const currentType = typeFormDelete === 'text' ? 'password' : 'text';
    setTypeFormDelete(currentType);
  };

  // Control fields with side effects
  useEffect(() => {
    if (settingsForms.newPassword !== settingsForms.controlNewPassword) {
      setPasswordConfirmError(t('formUser.errorMessage.passwordsDontMatch'));
    }
    else setPasswordConfirmError('');
    if (incorrectPasswordError === true) {
      setIncorrectPasswordError(t('formUser.errorMessage.incorrectPassword'));
    }
    else setIncorrectPasswordError('');
    if (newPasswordError === true) {
      setNewPasswordError(t('formUser.errorMessage.incorrectNewPassword'));
    }
    else setNewPasswordError('');
    if (emailError === true) {
      setEmailError(t('formUser.errorMessage.incorrectEmail'));
    }
    else setEmailError('');
    if (emailFormatError === true) {
      setEmailFormatError(t('formUser.errorMessage.emailFormatError'));
    }
    else setEmailFormatError('');
  });

  const handleInputOnChange = (value, name) => {
    changeField(value, 'settingsForms', name);
  };

  // Fonction to control the correspondence of passwords,
  // and lengths of firstname and lastname
  const handleSubmitSettings = (event) => {
    event.preventDefault();
    handleChangeSettings();
  };

  const handleSubmitEmail = (event) => {
    event.preventDefault();
    handleChangeEmail();
  };

  const handleDelete = (event) => {
    event.preventDefault();
    handleDeleteUser();
  };

  return (
    <>
      {loading && <Loading />}
      <div className="settings">
        <TitlePage label={t('menu.settings')} subtitle={`${firstname} ${lastname}`} />
        <div className="settings__forms">
          <FormUser className="marginB">
            <div className="settings__column">
              <LinkButton path="/logout" label={t('menu.signOut')} onClickLink={handleLogout} />
            </div>
          </FormUser>
          <FormUser className="marginB">
            <form onSubmit={handleSubmitSettings} className="settings__columns">
              <div className="settings__column">
                <InputText name="oldPassword" type={typeFormNewPassword} placeholder={t('formUser.passwordOld')} value={settingsForms.oldPassword} onChange={handleInputOnChange} />
                <InputText name="newPassword" type={typeFormNewPassword} placeholder={t('formUser.passwordNew')} value={settingsForms.newPassword} onChange={handleInputOnChange} />
              </div>
              <div className="settings__column">
                <p className="register__error">{PasswordConfirmError}</p>
                <InputText name="controlNewPassword" type={typeFormNewPassword} placeholder={t('formUser.passwordConfirmation')} value={settingsForms.controlNewPassword} onChange={handleInputOnChange} />
                <span className="inputText--show-password-1" onClick={showHideForm1}>{typeFormNewPassword === 'text' ? t('formUser.buttonHide') : t('formUser.buttonShow')}</span>
                <p className="settings__error">{NewPasswordError}</p>
                <p className="settings__error">{IncorrectPasswordError}</p>
                <SubmitButton label={t('formUser.buttonChangePassword')} />
              </div>
            </form>
          </FormUser>
          <FormUser className="marginB">
            <form onSubmit={handleSubmitEmail} className="settings__columns">
              <div className="settings__column">
                <InputText name="controlPassword" type={typeFormNewEmail} placeholder={t('formUser.password')} value={settingsForms.controlPassword} onChange={handleInputOnChange} />
                <InputText name="newEmail" type="email" placeholder={t('formUser.emailNew')} value={settingsForms.newEmail} onChange={handleInputOnChange} />
              </div>
              <div className="settings__column">
                <span className="inputText--show-password-1" onClick={showHideForm2}>{typeFormNewEmail === 'text' ? t('formUser.buttonHide') : t('formUser.buttonShow')}</span>
                <p className="settings__error">{IncorrectPasswordError}</p>
                <p className="settings__error">{EmailFormatError}</p>
                <p className="settings__error">{EmailError}</p>
                <SubmitButton label={t('formUser.buttonChangeEmail')} />
              </div>
            </form>
          </FormUser>
          <FormUser className="marginB-delete">

            <form onSubmit={handleDelete}>
              <div className="settings__column">
                <InputText name="controlPasswordDelete" type={typeFormDelete} placeholder={t('formUser.password')} value={settingsForms.controlPasswordDelete} onChange={handleInputOnChange} />
                <span className="inputText--show-password-1" onClick={showHideForm3}>{typeFormDelete === 'text' ? t('formUser.buttonHide') : t('formUser.buttonShow')}</span>
              </div>
              <div className="settings__column">
                <p className="settings__error">{IncorrectPasswordError}</p>
                <SubmitButton label={t('formUser.buttonDeleteAccount')} />
              </div>
            </form>
          </FormUser>
        </div>
      </div>
    </>
  );
};

Settings.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  changeField: PropTypes.func,
  settingsForms: PropTypes.object.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  handleChangeSettings: PropTypes.func,
  handleChangeEmail: PropTypes.func,
  handleDeleteUser: PropTypes.func,
  incorrectPasswordError: PropTypes.bool,
  newPasswordError: PropTypes.bool,
  emailError: PropTypes.bool,
  emailFormatError: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
};

Settings.defaultProps = {
  changeField: () => {},
  handleChangeSettings: () => {},
  handleChangeEmail: () => {},
  handleDeleteUser: () => {},
  incorrectPasswordError: false,
  newPasswordError: false,
  emailError: false,
  emailFormatError: false,
};

// == Export
export default Settings;
