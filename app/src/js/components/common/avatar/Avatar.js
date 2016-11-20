import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './Avatar.scss';

const Avatar = (props) => {
  const containerClass = props.mode == 1 ? 'avatar-right' : 'avatar-right';
  return (
    <div className={containerClass}>
      <div className='avatar-text'>
        <div className='avatar-text--name'>Frank Arnold</div>
        <div className='avatar-text--email'>hello@frankarnold.com</div>
      </div>
      <div className='avatar-image'>
        <img className='avatar-image--content' src='https://avatars2.githubusercontent.com/u/6412038?v=3&s=200' />
      </div>
    </div>
  )
}

export default Avatar;
