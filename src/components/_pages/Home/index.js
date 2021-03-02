// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

import LinkS1 from 'src/components/_interactives/_buttons/LinkS1';

// == Composant
const Home = ({ isLoggedIn }) => (
  <div className="home">
    <h1><span className="home__subtitle">An introduction to </span><span className="home__title">Blockchain</span></h1>
    <div className="home__getStarted">
      <div><LinkS1 path={isLoggedIn === true ? ('/quizzes') : ('/login')} label="Get Started" /></div>
      <div><LinkS1 path={isLoggedIn === true ? ('/profile') : ('/register')} label="I have an account" /></div>
    </div>
  </div>
);

Home.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

// == Export
export default Home;
