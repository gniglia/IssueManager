import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cardActions from '../../../actions/cardActions';
import Avatar from '../../common/avatar/Avatar';
import EditableField from '../../common/EditableField';
import './CardModal.scss';

const CardModal = ({hideModal, updateCardTitle, updateCardDescription, modalProps}) => {
  const {card} = modalProps;

  return (
    <div className='modal'>
      <div className='modal-close' onClick={() => hideModal()}>&times;</div>
      <div className='modal-container'>
        <header className='modal-header'>
          <Avatar mode='2' />
        </header>
        <section className='modal-section'>
          <div className='card-modal--title'>
            <EditableField
              id={card._id}
              fieldName='title'
              fieldType='text'
              fieldValue={card.title}
              onFieldChange={updateCardTitle} />
          </div>
          <div className='card-modal--description'>
            <EditableField
              id={card._id}
              fieldName='description'
              fieldType='area'
              fieldValue={card.description}
              onFieldChange={updateCardDescription} />
          </div>
        </section>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCardTitle: bindActionCreators(cardActions.updateCardTitle, dispatch),
    updateCardDescription: bindActionCreators(cardActions.updateCardDescription, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(CardModal);
