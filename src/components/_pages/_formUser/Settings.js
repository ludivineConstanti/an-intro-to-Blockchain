// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// == Import
import './style.scss';
import TitlePage from 'src/components/_statics/TitlePage';
import FormUser from 'src/components/_partials/FormUser';
import InputText from 'src/components/_interactives/InputText';
import SubmitButton from 'src/components/_interactives/_buttons/SubmitButton';
import LinkButton from 'src/components/_interactives/_buttons/LinkButton';

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
}) => {
  // without the language does not get updated
  const { t } = useTranslation();

  const [passwordConfirmError, setPasswordConfirmError] = useState('');

  // Fonction to control the correspondence of passwords,
  // and lengths of firstname and lastname
  const handleSubmitSettings = (event) => {
    event.preventDefault();
    if (settingsForms.newPassword !== settingsForms.controlNewPassword) {
      setPasswordConfirmError('Passwords do not match');
    }
    else {
      handleChangeSettings();
    }
  };

  const handleSubmitEmail = (event) => {
    event.preventDefault();
    handleChangeEmail();
  };

  return (
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
              <InputText name="oldPassword" type="password" placeholder={t('formUser.passwordOld')} value={settingsForms.oldPassword} onChange={changeField} />
              <InputText name="newPassword" type="password" placeholder={t('formUser.passwordNew')} value={settingsForms.newPassword} onChange={changeField} />
            </div>
            <div className="settings__column">
              <p className="register__error">{passwordConfirmError}</p>
              <InputText name="controlNewPassword" type="password" placeholder={t('formUser.passwordConfirmation')} value={settingsForms.controlNewPassword} onChange={changeField} />
              <SubmitButton label={t('formUser.buttonChangePassword')} />
            </div>
          </form>
        </FormUser>
        <FormUser className="marginB">
          <form onSubmit={handleSubmitEmail} className="settings__columns">
            <div className="settings__column">
              <InputText name="controlPassword" type="password" placeholder={t('formUser.password')} value={settingsForms.controlPassword} onChange={changeField} />
              <InputText name="newEmail" type="email" placeholder={t('formUser.emailNew')} value={settingsForms.newEmail} onChange={changeField} />
            </div>
            <div className="settings__column">
              <SubmitButton label={t('formUser.buttonChangeEmail')} />
            </div>
          </form>
        </FormUser>
        <FormUser className="marginB">
          <form onSubmit={handleDeleteUser}>
            <div className="settings__buttonS1">
              <SubmitButton label={t('formUser.buttonDeleteEmail')} />
            </div>
          </form>
        </FormUser>
      </div>
    </div>
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
};

Settings.defaultProps = {
  changeField: () => {},
  handleChangeSettings: () => {},
  handleChangeEmail: () => {},
  handleDeleteUser: () => {},
};

// == Export
export default Settings;
