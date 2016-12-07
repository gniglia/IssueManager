import React from 'react';
import { Link } from 'react-router';
import Button from '../common/Button';
import Avatar from '../common/avatar/Avatar';

const CardItem = ({card, deleteCard}) => {
  return (
    <div key={card._id} className='col-sm-6 col-md-3 card-wrapper'>
      <div className='thumbnail card'>
        <div className='card-body'>
          <Avatar mode='2' />
          <div className='card-title'>
            <Link to={`/cards/${card._id}`}>{card.title}</Link>
          </div>
          <div className='fade-text'>
            <p>{card.description}</p>
          </div>
{/*
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
*/}
        </div>
        <div className='card-footer'>
          {'15m ago'}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
