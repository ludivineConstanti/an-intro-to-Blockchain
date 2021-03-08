// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import LinkButton from 'src/components/_interactives/_buttons/LinkButton';
import { _ } from 'core-js';

// == Composant
const Home = ({ isLoggedIn }) => (
  <div className="border-padding">
    <div className="home">
      <h1><span className="home__subtitle">An introduction to </span><span className="home__title">Blockchain</span></h1>
      <div className="home__getStarted">
        <div><LinkButton path={isLoggedIn === true ? ('/quizzes') : ('/register')} label="Get Started" /></div>
        <div><LinkButton path={isLoggedIn === true ? ('/settings') : ('/login')} label="I have an account" /></div>
      </div>
    </div>
  </div>
);

Home.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

// == Export
export default Home;
