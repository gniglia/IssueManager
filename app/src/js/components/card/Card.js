import React from 'react';
import { Link } from 'react-router';
import Button from '../common/Button';
import Avatar from '../common/avatar/Avatar';
import TimeAgo from 'react-timeago'
import './Card.scss';

const CardItem = ({card, deleteCard, showModal}) => {
  return (
    <div key={card._id} className='col-sm-6 col-md-3 card-container'>
      <div className='thumbnail card'>
        <div className='card-body'>
          <Avatar mode='2' />
          <div className='card-title'>
            <a onClick={() => {
              showModal({ modalType: 'MODAL_TYPE_CARD', modalProps: { card }})
            }}>
              {card.title}
            </a>
            {/*}<Link to={`/cards/${card._id}`}>{card.title}</Link>{*/}
          </div>
          <div className='card-text'>
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
        <div className='card-footer flex-align-center'>
          <TimeAgo date={card.createdAt} live={false} />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
