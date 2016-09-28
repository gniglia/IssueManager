import React from 'react';

const Button = (props) => {
  const disabled = props.disabled || false;

  return (
    <button
      onClick={props.onClickHandler}
      className={props.className}
      disabled={disabled}>
      {props.text}
    </button>
  );
};

export default Button;
