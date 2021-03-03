// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import ProgressionSquare from 'src/components/_statics/ProgressionBar/ProgressionSquare';

// == Composant
const ProgressionBar = ({ totalNum, progressionNum }) => {
  const arrProgression = [];
  for (let i = 0; i < totalNum; i += 1) {
    if (i < progressionNum) arrProgression.push(<ProgressionSquare status="done" />);
    else if (i === progressionNum) arrProgression.push(<ProgressionSquare status="selected" />);
    else arrProgression.push(<ProgressionSquare status="toDo" />);
  }
  return (
    <div className="progressionBar">
      <div className="progressionBar__inside">
        {arrProgression}
      </div>
    </div>
  );
};

ProgressionBar.propTypes = {
  totalNum: PropTypes.number.isRequired,
  progressionNum: PropTypes.number.isRequired,
};

// == Export
export default ProgressionBar;
