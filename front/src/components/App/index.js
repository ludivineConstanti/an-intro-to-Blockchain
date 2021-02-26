// == Import npm
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

// == Import
import './style.scss';
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Quizzes from 'src/components/Quizzes';
import Quiz from 'src/components/Quiz';
import Login from 'src/components/Login';
import Register from 'src/components/Register';
import Error from 'src/components/Error';
import Profile from 'src/components/Profile';

// == Composant
const App = () => (
  <div className="app">
    <Header />
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
  </div>
);

// == Export
export default App;
