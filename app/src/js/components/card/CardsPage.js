import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cardActions from '../../actions/cardActions';
import * as filterActions from '../../actions/filterActions';
import CardList from './CardList';
import { Link } from 'react-router';
import Button from '../common/Button';
import { getFilteredCards } from '../../selectors/cardSelector';

const CardsPage = (props) => {
  return (
    <div>
      <h3>Managing Cards</h3>

      <Link to={'/cards-edit'}>
        <Button
          text='Add card'
          className='btn btn-primary btn-sm'
        />
      </Link>
      <hr />
      <CardList
        fetching={props.fetching}
        cards={props.cards}
        deleteCard={props.cardActions.deleteCard}
        updateFilter={props.filterActions.updateFilter}
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

const mapdispatchToProps = (dispatch) => {
  return {
    cardActions: bindActionCreators(cardActions, dispatch),
    filterActions: bindActionCreators(filterActions, dispatch)
  };
};

export default connect(mapStateToProps, mapdispatchToProps)(CardsPage);
