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
import Header from 'src/containers/Header';
import Frame from 'src/components/Frame';
import Home from 'src/containers/_pages/Home';
import Quizzes from 'src/containers/_pages/Quizzes';
import Quiz from 'src/containers/_pages/Quiz';
import QuizResult from 'src/components/_pages/QuizResult';
import Articles from 'src/containers/_pages/Articles';
import Register from 'src/containers/_pages/_formUser/Register';
import LogIn from 'src/containers/_pages/_formUser/LogIn';
import Settings from 'src/containers/_pages/_formUser/Settings';
import Error from 'src/components/_pages/Error';
import Menu from 'src/containers/_pages/Menu';
import Loading from 'src/containers/Loading';
import { init, animate } from 'src/threeJsAnimation/threeJsAnimation';
import i18next from 'src/i18next';
// == Composant

const App = ({
  menuOpen,
  loading,
  isLoggedIn,
  language,
}) => {
  useEffect(() => {
    init();
    animate();
  }, []);

  useEffect(() => {
    i18next.changeLanguage(language, () => {});
  }, [language]);

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
            <Route path="/quiz/:id/result" exact>
              <QuizResult />
            </Route>
            {/* Page - All article */}
            <Route path="/articles" exact>
              <Articles />
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
              <Settings />
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
      <div className="app__threeJs" />
    </div>
  );
};

App.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  language: PropTypes.string.isRequired,
};
// == Export
export default App;
