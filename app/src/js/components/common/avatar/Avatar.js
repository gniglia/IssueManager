import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './Avatar.scss';

const Avatar = (props) => {
  const className = props.mode == 1 ? 'avatarContainer' : 'avatarContainer2';
  return (
    <div className={className}>
      <div className='info'>
        <div className='name'>Frank Arnold</div>
        <div className='email'>hello@frankarnold.com</div>
      </div>
      <div className='image'>
        <img src='https://avatars2.githubusercontent.com/u/5045908?v=3&s=460' />
      </div>
    </div>
  )
}

export default Avatar;
