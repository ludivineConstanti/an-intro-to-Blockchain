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
import Login from 'src/components/Login';
import Register from 'src/components/Register';
import Error from 'src/components/Error';
import Profile from 'src/components/Profile';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Switch>
      {/* Page d'accueil */}
      <Route path="/" exact>
        <Home />
      </Route>
      {/* Page répertoriant tout les quiz */}
      <Route path="/quizzes" exact>
        <Quizzes />
      </Route>
      {/* Page de connexion */}
      <Route path="/login" exact>
        <Login />
      </Route>
      {/* Page d'inscription */}
      <Route path="/register" exact>
        <Register />
      </Route>
      <Route path="/profile" exact>
        <Profile />
      </Route>
      {/* Page d'erreur */}
      <Route>
        <Error />
      </Route>

    </Switch>
  </div>
);

// == Export
export default App;
