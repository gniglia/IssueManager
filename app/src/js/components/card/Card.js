import React from 'react';
import { Link } from 'react-router';
import Button from '../common/Button';

const CardItem = ({card, deleteCard}) => {
  return (
    <div key={card._id} className="col-sm-6 col-md-3">
      <div className="thumbnail">
        <div className="caption">
          <Link to={`/cards/${card._id}`}>{card.title}</Link>
          <p>{card.description} ({card.comments.length})</p>
          <div>
            <Button
              text='remove'
              onClickHandler={() => {
                deleteCard(card._id)
              }}
              className='btn btn-danger btn-xs'
            />
            {' '}
            <Link to={`/cards-edit/${card._id}`}>
              <Button
                text='edit'
                className='btn btn-success btn-xs'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
