// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Trans, useTranslation } from 'react-i18next';

// == Import
import './style.scss';
import LinkButton from 'src/components/_interactives/_buttons/LinkButton';

// == Composant
const Home = ({ isLoggedIn }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="border-padding">
      <div className="home">
        <h1><span className="home__subtitle"><Trans i18nKey="home.subtitle" /></span><span className="home__title"><Trans i18nKey="home.title" /></span></h1>
        <div className="home__getStarted">
          <div><LinkButton path={isLoggedIn === true ? ('/quizzes') : ('/register')} label={<Trans i18nKey="home.link1" />} /></div>
          <div><LinkButton path={isLoggedIn === true ? ('/settings') : ('/login')} label={<Trans i18nKey="home.link2" />} /></div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

// == Export
export default Home;
