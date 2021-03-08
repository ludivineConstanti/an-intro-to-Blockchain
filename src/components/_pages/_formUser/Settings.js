// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import TitlePage from 'src/components/_statics/TitlePage';
import FormUser from 'src/components/_partials/FormUser';
import InputText from 'src/components/_interactives/InputText';
import SubmitButton from 'src/components/_interactives/_buttons/SubmitButton';
import LinkButton from 'src/components/_interactives/_buttons/LinkButton';

// == Composant

const Settings = ({ handleLogout, firstname, lastname, changeField, settingsForms }) => {

  const handleOnClick = () => {
    handleLogout();
  };
  return (
    <div className="settings">
      <TitlePage label="Settings" subtitle={`${firstname} ${lastname}`} />
      <div className="settings__forms">
        <FormUser className="marginB">
          <div className="settings__column">
            <LinkButton path="/logout" label="Sign out" onClickLink={handleOnClick} />
          </div>
        </FormUser>
        <FormUser className="marginB">
          <form className="settings__columns">
            <div className="settings__column">
              <InputText name="oldPassword" type="email" placeholder="Old password" value={settingsForms.oldPassword} onChange={changeField} />
              <InputText name="newPassword" type="email" placeholder="New password" value={settingsForms.newPassword} onChange={changeField} />
            </div>
            <div className="settings__column">
              <InputText name="controlNewPassword" type="email" placeholder="Confirm new password" value={settingsForms.controlNewPassword} onChange={changeField} />
              <SubmitButton label="Change my password" />
            </div>
          </form>
        </FormUser>
        <FormUser className="marginB">
          <form className="settings__columns">
            <div className="settings__column">
              <InputText type="password" placeholder="New email address" />
            </div>
            <div className="settings__column">
              <SubmitButton label="Change my email" />
            </div>
          </form>
        </FormUser>
        <FormUser className="marginB">
          <div className="settings__buttonS1"><LinkButton label="Delete my account" /></div>
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
};

Settings.defaultProps = {
  changeField: () => {},
};

// == Export
export default Settings;
