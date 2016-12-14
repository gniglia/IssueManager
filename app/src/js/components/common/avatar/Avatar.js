import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './Avatar.scss';
import imageSrc from './useravatar.svg';

const Avatar = (props) => {
  var avatarClasses = classNames({
      'avatar-container': true,
      'avatar-image-right': props.mode == 1,
      'avatar-image-left': props.mode == 2
  });

  return (
    <div className={avatarClasses}>
      <div className='avatar-text'>
        <div className='avatar-text--name'>Frank Arnold</div>
        <div className='avatar-text--email'>hello@frankarnold.com</div>
      </div>
      <div className='avatar-image'>
        <img className='avatar-image--content' src={imageSrc} />
      </div>
    </div>
  )
}

export default Avatar;
