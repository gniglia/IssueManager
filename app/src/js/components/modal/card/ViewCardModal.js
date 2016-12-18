import React, { PropTypes } from 'react';
import Avatar from '../../common/avatar/Avatar';
import './CardModal.scss';


const ViewCardModal = ({hideModal, modalProps}) => {
  const {card} = modalProps;

  return (
    <div className='modal'>
      <div className='modal-close' onClick={() => { hideModal() }}>&times;</div>
      <div className='modal-container'>
        {getHeader(modalProps)}
        <section className='modal-section'>
          <div className='card-modal--title'>
            {card.title}
          </div>
          <div className='card-modal--description'>
            {card.description}
          </div>

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
          This is the body of the modal!<br />
          This is the body of the modal!<br />
          This is the body of the modal!<br />
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

const getHeader = (modalProps) => {
  console.log(modalProps);
  if (modalProps.mode && modalProps.mode !== 'new') {
    return (
      <header className='modal-header'>
        <Avatar mode='2' />
      </header>
    );
  }
};

export default ViewCardModal;
