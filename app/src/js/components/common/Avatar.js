import React, { PropTypes } from 'react'
import './avatar.scss';

const Avatar = (props) => {
  return (
    <div className='avatarContainer'>
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
