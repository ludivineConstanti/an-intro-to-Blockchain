// == Import npm
import React from 'react';

// == Import
import './style.scss';
import ButtonBig from 'src/components/_interactives/ButtonBig';

const logged = true;

// == Composant
const Home = () => (
  <div className="home">
    <h1><span className="home__subtitle">An introduction to </span><span className="home__title">Blockchain</span></h1>
    <div className="home__getStarted">
      <div><ButtonBig path={logged === true ? ('/quizzes') : ('/login')} label="Get Started" /></div>
      <div><ButtonBig path={logged === true ? ('/profile') : ('/register')} label="I have an account" /></div>
    </div>
  </div>
);

// == Export
export default Home;
