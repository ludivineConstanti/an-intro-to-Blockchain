// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
} from 'react-router-dom';

// == Import
import './style.scss';
import Header from 'src/containers/Header';
import Frame from 'src/components/Frame';
import Home from 'src/containers/_pages/Home';
import Quizzes from 'src/components/_pages/Quizzes';
import Quiz from 'src/components/_pages/Quiz';
import QuizResult from 'src/components/_pages/QuizResult';
import Register from 'src/components/_pages/_formUser/Register';
import LogIn from 'src/components/_pages/_formUser/LogIn';
import Settings from 'src/components/_pages/_formUser/Settings';
import Error from 'src/components/_pages/Error';
import Menu from 'src/containers/_pages/Menu';

// == Composant
const App = ({ open }) => (
  <div className="app">
    {open && (
      <Menu />
    )}
    {!open && (
      <>
        <Header />
        <Frame />

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
          {/* Login Page */}
          <Route path="/login" exact>
            <LogIn />
          </Route>
          {/* Register Page */}
          <Route path="/register" exact>
            <Register />
          </Route>
          {/* Page de settings du profile */}
          <Route path="/settings" exact>
            <Settings />
          </Route>
          {/* 404 error */}
          <Route>
            <Error />
          </Route>

        </Switch>

      </>
    )}
  </div>
);

App.propTypes = {
  open: PropTypes.bool.isRequired,
};
// == Export
export default App;
