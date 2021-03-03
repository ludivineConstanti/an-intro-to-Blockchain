// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import TitlePage from 'src/components/_statics/TitleCategory';
import LinkButton from 'src/components/_interactives/_buttons/LinkButton';

// == Composant
const AnswerQuestion = () => (
  <section className="answerQuestion">
    <TitlePage label="So close!" />
    <p className="answerQuestion__justification">
      Who are those horrible orange men? Good man. Nixon's pro-war and pro-family. I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. Hey, you add a one and two zeros to that or we walk! And from now on you're all named Bender Jr. WINDMILLS DO NOT WORK THAT WAY! GOOD NIGHT! Tell her you just want to talk. It has nothing to do with mating. Wow, you got that off the Internet? In my day, the Internet was only used to download pornography. Oh, how awful. Did he at least die painlessly? …To shreds, you say. Well, how is his wife holding up? …To shreds, you say. Fry! Stay back! He's too powerful! No, just a regular mistake. Bender! Ship! Stop bickering or I'm going to come back there and change your opinions manually! You, a bobsleder!? That I'd like to see! Five hours? Aw, man! Couldn't you just get me the death penalty? You, minion. Lift my arm. AFTER HIM! No! Don't jump!
    </p>
    <div className="answerQuestion__links">
      <LinkButton label="Learn more" />
      <LinkButton label="Next" path="/quiz/:id/result" />
    </div>
  </section>
);

/* CategoryQuiz.propTypes = {
  label: PropTypes.string.isRequired,
}; */

// == Export
export default AnswerQuestion;
