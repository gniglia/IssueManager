import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cardActions from '../../actions/cardActions';
import * as activeCardActions from '../../actions/activeCardActions';
import * as modalActions from '../../actions/modalActions';
import CardList from './CardList';
import { getFilteredCards } from '../../selectors/cardSelector';
import classNames from 'classnames';

const CardsPage = (props) => {
  var cardListClasses = classNames({
      'blurry': props.isModalActive
  });

  return (
    <div className={cardListClasses}>
      <CardList
        fetching={props.fetching}
        cards={props.cards}
        archiveCard={props.cardActions.archiveCard}
        archiveCardSocket={props.cardActions.archiveCardSocket}
        createCardSocket={props.cardActions.createCardSocket}
        updateCardSocket={props.cardActions.updateCardSocket}
        showModal={props.modalActions.showModal}
        setActiveCard={props.setActiveCard}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    saving: state.cards.saving,
    cards: getFilteredCards(state),
    fetching: state.cards.fetching,
    isModalActive: state.modal.modalType
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveCard: bindActionCreators(activeCardActions.setActiveCard, dispatch),
    cardActions: bindActionCreators(cardActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsPage);
