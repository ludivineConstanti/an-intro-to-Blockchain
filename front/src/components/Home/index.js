// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './style.scss';

const logged = true;

// == Composant
const Home = () => (
  <div className="Home">
    <h1><span>An introduction to </span>Blockchain</h1>
    <div className="getStarted">
      {logged === true
        ? (
          <Link
            to={{ pathname: '/quizzes' }}
          >Get Started
          </Link>
        )
        : (
          <Link
            to={{ pathname: '/login' }}
          >Get Started
          </Link>
        )}
      {logged === true
        ? (
          <Link
            to={{ pathname: '/profile' }}
          >I have an account
          </Link>
        )
        : (
          <Link
            to={{ pathname: '/register' }}
          >I have an account
          </Link>
        )}
    </div>

  </div>
);

// == Export
export default Home;
