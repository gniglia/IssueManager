import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cardActions from '../../../actions/cardActions';
import * as commentActions from '../../../actions/commentActions';
import Avatar from '../../common/avatar/Avatar';
import EditableField from '../../common/editableField/EditableField';
import CommentList from '../../comment/CommentList';
import { getActiveCard } from '../../../selectors/activeCardSelector';
import closePopup from '../../../../assets/images/close-popup.png';
import { socketConnect } from 'socket.io-react';
import './CardModal.scss';

class CardModal extends React.Component {
  constructor(props) {
    super(props);

    // this.state = { deleted: false };
  }

  // componentDidMount() {
  //   this.props.socket.on('server:cardRemoved', (data) => {
  //     this.setCardDeleted();
  //   });
  // }

  // setCardDeleted() {
  //   this.setState({ deleted: true });
  // }

  render() {
    const {card, hideModal, saving, savingField, fetching, updateCardTitle, updateCardDescription, commentActions} = this.props;

    if (card.archived) {
      return (
        <div className='modal'>
          <div className='card-modal'>
            <img className='card-modal-close' onClick={() => hideModal()} src={closePopup} />
            <div className='card-modal-container'>
              <header className='card-modal-header'>
                <Avatar mode='2' />
              </header>
              <section className='card-modal-section'>
                <div>
                  This Card has been Archived.
                </div>
              </section>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className='modal'>
        <div className='card-modal'>
          <img className='card-modal-close' onClick={() => hideModal()} src={closePopup} />
          <div className='card-modal-container'>
            <header className='card-modal-header'>
              <Avatar mode='2' />
            </header>
            <section className='card-modal-section'>
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
                  savingField={savingField}
                  fetching={fetching}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    card: getActiveCard(state),
    saving: state.cards.saving,
    savingField: state.cards.savingField,
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

export default socketConnect(connect(mapStateToProps, mapDispatchToProps)(CardModal));
