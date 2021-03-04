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
      <FormUser>
        <div className="settings__buttonS2">
          <LinkButton label="Sign out" onClickLink={handleOnClick} />
        </div>
        <div className="settings__columns">
          <div className="settings__firstColumn">
            <form>
              <InputText type="email" placeholder="Old password" />
              <InputText type="email" placeholder="New password" />
              <InputText type="email" placeholder="Confirm new password" />
              <SubmitButton label="Change my password" className="size2" />
            </form>
          </div>
          <div className="settings__secondColumn">
            <form>
              <InputText type="password" placeholder="New email address" />
              <SubmitButton label="Change my email" className="size2" />
            </form>
            <div className="settings__buttonS1"><LinkButton label="Delete my account" className="size2" /></div>
          </div>
        </div>
      </FormUser>
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
