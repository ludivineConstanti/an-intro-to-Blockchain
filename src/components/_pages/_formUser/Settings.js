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
const Settings = ({ isLogged, handleLogout }) => {
  const handleOnClick = (event) => {
    event.preventDefault();
    handleLogout();
  };
  return (
    <div className="settings">
      <TitlePage label="Settings" subtitle="Firstname name" />
      <div xlassName="settings__forms">
        <FormUser className="marginB">
          <div className="settings__column">
            <LinkButton label="Sign out" onClickLink={handleOnClick} />
          </div>
        </FormUser>
        <FormUser className="marginB">
          <form className="settings__columns">
            <div className="settings__column">
              <InputText type="email" placeholder="Old password" />
              <InputText type="email" placeholder="New password" />
            </div>
            <div className="settings__column">
              <InputText type="email" placeholder="Confirm new password" />
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
  isLogged: PropTypes.bool,
  handleLogout: PropTypes.func.isRequired,
};

Settings.defaultProps = {
  isLogged: false,
};

// == Export
export default Settings;
