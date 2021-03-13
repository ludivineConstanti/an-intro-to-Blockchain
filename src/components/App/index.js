// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

// == Import
import './style.scss';
import './animation.scss';
import Header from 'src/containers/Header';
import Frame from 'src/components/Frame';
import Home from 'src/containers/_pages/Home';
import Quizzes from 'src/containers/_pages/Quizzes';
import Quiz from 'src/containers/_pages/Quiz';
import Articles from 'src/containers/_pages/Articles';
import Achievements from 'src/containers/_pages/Achievements';
import QuizResult from 'src/containers/_pages/QuizResult';
import Register from 'src/containers/_pages/_formUser/Register';
import LogIn from 'src/containers/_pages/_formUser/LogIn';
import Settings from 'src/containers/_pages/_formUser/Settings';
import Error from 'src/components/_pages/Error';
import Menu from 'src/containers/_pages/Menu';
import Loading from 'src/containers/Loading';
import { init, animate } from 'src/threeJsAnimation/threeJsAnimation';
import i18next from 'src/i18next';
import triggerAnimationBackground from 'src/middlewares/triggerAnimationBackground';
// == Composant

const App = ({
  menuOpen,
  loading,
  isLoggedIn,
  language,
  hasFinishedQuiz,
  backgroundClassName,
}) => {
  useEffect(() => {
    // start the three.js scene
    // once the other elements are ready
    init();
    animate();
    // remove the class that gives the intro blur transition
    // so we can add it later when click on more links
    triggerAnimationBackground();
  }, []);

  useEffect(() => {
    i18next.changeLanguage(language, () => {});
  }, [language]);

  document.title = window.location.href.slice(22);
  //! Améliorer ça

  return (
    <div className="app">
      <Frame />
      {loading && <Loading />}
      <Header />
      {menuOpen && (
      <Menu />

      )}
      {(!menuOpen)
        && (
        <>
          <Switch>
            {/* Homepage */}
            <Route path="/" exact>
              <Home />
            </Route>
            {/* Page - All quizzes */}
            <Route path="/quizzes" exact>
              <Quizzes />
            </Route>
            {/* Quiz (answer questions) */}
            <Route path="/quiz/:id" exact>
              <Quiz />
            </Route>
            {/* Quiz result */}
            <Route path="/quizResult" exact>
              {!hasFinishedQuiz ? <Redirect to="/" /> : <QuizResult />}
            </Route>
            {/* Page - All article */}
            <Route path="/articles" exact>
              <Articles />
            </Route>
            {/* Page - All article */}
            <Route path="/achievements" exact>
              {isLoggedIn ? <Achievements /> : <Redirect to="/login" />}
            </Route>
            {/* Login Page */}
            <Route path="/login" exact>
              {isLoggedIn ? <Redirect to="/quizzes" /> : <LogIn />}
            </Route>
            {/* Register Page */}
            <Route path="/register" exact>
              {isLoggedIn ? <Redirect to="/quizzes" /> : <Register />}
            </Route>
            {/* Page de settings du profile */}
            <Route path="/settings" exact>
              {isLoggedIn ? <Settings /> : <Redirect to="/" />}
            </Route>
            <Route path="/logout" exact>
              <Redirect to="/" />
            </Route>
            {/* 404 error */}
            <Route>
              <Error />
            </Route>
          </Switch>
        </>
        )}
      <div className={backgroundClassName} />
    </div>
  );
};

App.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  language: PropTypes.string.isRequired,
  hasFinishedQuiz: PropTypes.bool.isRequired,
  backgroundClassName: PropTypes.string.isRequired,
};
// == Export
export default App;
