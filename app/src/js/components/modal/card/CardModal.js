import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cardActions from '../../../actions/cardActions';
import * as commentActions from '../../../actions/commentActions';
import Avatar from '../../common/avatar/Avatar';
import EditableField from '../../common/editableField/EditableField';
import CommentList from '../../comment/CommentList';
import './CardModal.scss';

const CardModal = ({hideModal, saving, fetching, updateCardTitle, updateCardDescription, commentActions, modalProps}) => {
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
              required={true}
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
          <div>
            <CommentList
              card={card}
              commentActions={commentActions}
              saving={saving}
              fetching={fetching}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    saving: state.cards.saving,
    fetching: state.cards.fetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCardTitle: bindActionCreators(cardActions.updateCardTitle, dispatch),
    updateCardDescription: bindActionCreators(cardActions.updateCardDescription, dispatch),
    commentActions: bindActionCreators(commentActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);
