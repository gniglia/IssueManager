import React from 'react';
import Avatar from '../common/avatar/Avatar';
import TimeAgo from 'react-timeago'
import './Card.scss';
import { socketConnect } from 'socket.io-react';

const CardItem = ({card, archiveCard, showModal, setActiveCard, socket}) => {
  return (
    <div key={card._id} className='col-sm-6 col-md-3 card-container'>
      <div className='thumbnail card'>
        <div className='card-body'>
          <Avatar mode='2' />
          <div className='card-title'>
            <a onClick={() => {
              setActiveCard(card._id);
              showModal({ modalType: 'MODAL_TYPE_CARD' })
            }}>
              {card.title}
          </a>
          </div>
          <div className='card-text format-text'>
            <p>{card.description}</p>
          </div>
        </div>
        <div className='card-footer'>
          <div
            className='card-footer--bin icon-bin'
            title='Archive'
            onClick={() => {
              archiveCard(card._id).then(archivedCard => {
                socket.emit('cardUpdated', { card: archivedCard.value.data } );
              })
            }} >
          </div>
          <div className='card-footer--date'>
            <TimeAgo date={card.createdAt} live={false} />
          </div>
          <div className='card-footer--right'>
            {card.comments.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default socketConnect(CardItem);
