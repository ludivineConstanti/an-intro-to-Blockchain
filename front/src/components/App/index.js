// == Import npm
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

// == Import
import './style.scss';
import Header from 'src/containers/Header';
import Frame from 'src/components/Frame';
import BorderMargin from 'src/components/BorderMargin';
import Home from 'src/containers/_pages/Home';
import Quizzes from 'src/components/_pages/Quizzes';
import Quiz from 'src/components/_pages/Quiz';
import Login from 'src/components/_pages/Login';
import Register from 'src/components/_pages/Register';
import Error from 'src/components/_pages/Error';
import Profile from 'src/components/_pages/Profile';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Frame />
    <BorderMargin>
      <Switch>
        {/* Homepage */}
        <Route path="/" exact>
          <Home />
        </Route>
        {/* Page - All quizzes */}
        <Route path="/quizzes" exact>
          <Quizzes />
        </Route>
        {/* Login Page */}
        <Route path="/quiz/:id" exact>
          <Quiz />
        </Route>
        {/* Login Page */}
        <Route path="/login" exact>
          <Login />
        </Route>
        {/* Register Page */}
        <Route path="/register" exact>
          <Register />
        </Route>
        {/* Page profile */}
        <Route path="/profile" exact>
          <Profile />
        </Route>
        {/* 404 error */}
        <Route>
          <Error />
        </Route>

      </Switch>
    </BorderMargin>
  </div>
);

// == Export
export default App;
