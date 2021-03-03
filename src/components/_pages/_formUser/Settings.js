// == Import npm
import React from 'react';

// == Import
import './style.scss';
import FormUser from 'src/components/_partials/FormUser';
import InputText from 'src/components/_interactives/InputText';
import SubmitButton from 'src/components/_interactives/_buttons/SubmitButton';
import LinkButton from 'src/components/_interactives/_buttons/LinkButton';

// == Composant
const Settings = () => (
  <div className="settings">
    <FormUser>
      <div className="settings_bothColumns">
        <LinkButton label="Sign out" />
      </div>
      <div className="settings__firstColumn">
        <form>
          <InputText type="email" label="Old password" />
          <InputText type="email" label="New password" />
          <InputText type="email" label="Confirm new password" />
          <SubmitButton label="Change my password" className="size2" />
        </form>
      </div>
      <div className="settings__secondColumn">
        <form>
          <InputText type="password" label="New email address" />
          <SubmitButton label="Change my email" className="size2" />
        </form>
        <LinkButton label="Delete my account" className="size2" />
      </div>
    </FormUser>
  </div>
);

// == Export
export default Settings;