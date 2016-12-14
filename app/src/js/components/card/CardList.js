import React from 'react';
import Card from './Card';

const CardList = ({cards, fetching, deleteCard}) => {
  if (fetching) {
    return (
      <div>Loading</div>
    );
  }

  return (
    <div style={{margin: '0px 20px 20px 0px', overflow: 'hidden'}}>
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
