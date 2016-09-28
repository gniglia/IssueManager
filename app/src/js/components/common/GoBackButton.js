import React from 'react';
import { browserHistory } from 'react-router';

const GoBackButton = (props) => {
  const goBack = (e) => {
    e.preventDefault();
    browserHistory.goBack();
  };

  return (
    <button
      className={props.className}
      onClick={goBack}>
      {props.text}
    </button>
  );
};

export default GoBackButton;
