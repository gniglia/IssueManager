import React, { PropTypes } from 'react'
import './Spinner.scss';

const Spinner = (props) => {
  return (
    <div className='three-bounce fade-in' style={{width: '100px', padding: '0', margin: '0'}}>
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </div>
  )
}

export default Spinner;
