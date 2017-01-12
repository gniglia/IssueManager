import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cardActions from '../../../actions/cardActions';
import CardEditForm from '../../card/CardEditForm';
import './NewCardModal.scss';
import closePopup from '../../../../assets/images/close-popup.png';

const NewCardModal = ({hideModal, modalProps}) => {
  return (
    <div className='modal'>
      <div className='new-card-modal'>
        <img className='new-card-modal-close' onClick={() => hideModal()} src={closePopup} />
        <div className='new-card-modal-container'>
          <header className='new-card-modal-header'>
            <div className='new-card-modal-header-title'>
              <h2>Create Card</h2>
            </div>
          </header>
          <section className='new-card-modal-section'>
            <CardEditForm hideModal={hideModal} />
          </section>
        </div>
      </div>
    </div>
  )
}

export default NewCardModal;
