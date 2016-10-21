import React from 'react';
import { connect } from 'react-redux';
import CommentList from '../comment/CommentList';
import { bindActionCreators } from 'redux';
import * as commentActions from '../../actions/commentActions';

const CardView = ({card, saving, fetching, commentActions}) => {
  const title = card === null ? 'Loading' : card.title;
  return (
    <div>
      <h3>Comments of card '{title}'</h3>
      <CommentList
        card={card}
        commentActions={commentActions}
        saving={saving}
        fetching={fetching}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const cardId = ownProps.params.id;

  return {
    saving: state.cards.saving,
    card: state.cards.cards ? state.cards.cards.find(card => card._id === cardId) : null,
    fetching: state.cards.fetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    commentActions: bindActionCreators(commentActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardView);
