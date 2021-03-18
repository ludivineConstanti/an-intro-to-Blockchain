// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

// == Import
import './style.scss';
import AboutIcon from 'src/containers/_interactives/_buttonsHeader/AboutIcon';
import CloseIcon from 'src/containers/_interactives/_buttonsHeader/CloseIcon';
import Frame from 'src/components/Frame';

// == Composant
const About = ({ showAbout }) => {
  // checks if the language was updated
  const { t } = useTranslation();

  return (
    <>
      <AboutIcon />
      {showAbout && (
      <>
        <div className="about">
          <Frame />
          <CloseIcon useCase="hideAbout" className="bottomLeftDesktop" />
          <section className="about__section">
            <h2 className="about__section__title">{t('about.title.0')}</h2>
            <ol className="about__section__text">
              <li>{t('about.text.0.0')}</li>
              <li>{t('about.text.0.1')}</li>
              <li>{t('about.text.0.2')}</li>
            </ol>
          </section>
          <section className="about__section">
            <h2 className="about__section__title">{t('about.title.1')}</h2>
            <p className="about__section__text">{t('about.text.1.0')}</p>
          </section>
        </div>
      </>
      )}
    </>
  );
};

About.propTypes = {
  showAbout: PropTypes.bool.isRequired,
};

// == Export
export default About;
