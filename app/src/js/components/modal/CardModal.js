import React, { PropTypes } from 'react';
import Avatar from '../common/avatar/Avatar';

const CardModal = (props) => {
  return (
    <div className='modal'>
      <div className='modal-close' onClick={() => { props.hideModal() }}>&times;</div>
      <div className='modal-container'>
        <header className='modal-header'>
          <Avatar mode='2' />
        </header>
        <section className='modal-section'>
          This is the body of the modal11!<br />
          This is the body of the modal!<br />
          This is the body of the modal!<br />
          This is the body of the modal!<br />
          This is the body of the modal!<br />
          This is the body of the modal!<br />
          This is the body of the modal!<br />
          This is the body of the modal!<br />
          This is the body of the modal!<br />
          This is the body of the modal!<br />
          This is the body of the moda34563456l!<br />
          This is the body of the modal!<br />
          This is the body of the modal!<br />
          This is the body of the modal!<br />
          This is the body of the modal!<br />
          This is the body of the modal!<br />
          This is the body of the modal22!<br />
        </section>
      </div>
    </div>
  )
}

export default CardModal;
