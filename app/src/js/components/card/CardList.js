import React from 'react';
import Card from './Card';
import SearchBox from '../common/SearchBox';

const CardList = ({cards, fetching, deleteCard, updateFilter}) => {
  if (fetching) {
    return (
      <div>Loading</div>
    );
  }

  return (
    <div>
      <SearchBox
        minLength={3}
        containerClassName='searchBox'
        buttonClassName='btn btn-default'
        buttonText='Search'
        inputClassName='form-control'
        inputPlaceholder='Search your stuff'
        onFilterUpdate={updateFilter} />
      <hr />
      {getCards(cards, deleteCard)}
    </div>
  );
};

export default CardList;

const getCards = (cards, deleteCard) => {
  if (cards.length === 0) {
    return (
      <div>No data to show</div>
    );
  }

  return (
    <div className="row-fluid">
      {
        cards.map(card => {
          return (
            <Card
              key={card._id}
              card={card}
              deleteCard={deleteCard}
            />
          )
      })}
    </div>
  );
};
