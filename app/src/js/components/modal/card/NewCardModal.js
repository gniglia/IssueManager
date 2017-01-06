import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cardActions from '../../../actions/cardActions';
import CardEditForm from '../../card/CardEditForm';
import './NewCardModal.scss';

const NewCardModal = ({hideModal, modalProps}) => {

  return (
    <div className='modal'>
      <div className='new-card-modal'>
        <div className='new-card-modal-close' onClick={() => hideModal()}>&times;</div>
        <div className='new-card-modal-container'>
          <header className='new-card-modal-header'>
            Create Card
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
