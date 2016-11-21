import React from 'react';
import { Link } from 'react-router';
import Button from '../common/Button';
import Avatar from '../common/avatar/Avatar';

const CardItem = ({card, deleteCard}) => {
  return (
    <div key={card._id} className='col-sm-4 col-md-3 thumbnail card'>
      <Avatar mode='2' />
      <Link to={`/cards/${card._id}`}>{card.title}</Link>
      <div className='fade-text'>
        <p>{card.description} ({card.comments.length})</p>
      </div>
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
  );
};

export default CardItem;
