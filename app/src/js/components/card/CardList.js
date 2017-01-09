import React from 'react';
import Card from './Card';
import Spinner from '../common/spinner/Spinner';

const CardList = ({cards, fetching, deleteCard, showModal}) => {
  if (fetching) {
    return (
      <Spinner />
    );
  }

  return (
    <div style={{padding: '0 20px 20px 0', overflow: 'hidden'}}>
      {getCards(cards, deleteCard, showModal)}
    </div>
  );
};

export default CardList;

const getCards = (cards, deleteCard, showModal) => {
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
              showModal={showModal}
            />
          )
      })}
    </div>
  );
};
