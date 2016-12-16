import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cardActions from '../../actions/cardActions';
import * as modalActions from '../../actions/modalActions';
import CardList from './CardList';
import { getFilteredCards } from '../../selectors/cardSelector';

const CardsPage = (props) => {
  return (
    <div>
      <CardList
        fetching={props.fetching}
        cards={props.cards}
        deleteCard={props.cardActions.deleteCard}
        showModal={props.modalActions.showModal}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    saving: state.cards.saving,
    cards: getFilteredCards(state),
    fetching: state.cards.fetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cardActions: bindActionCreators(cardActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsPage);
