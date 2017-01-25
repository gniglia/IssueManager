import React from 'react';
import Avatar from '../common/avatar/Avatar';
import TimeAgo from 'react-timeago'
import './Card.scss';

const CardItem = ({card, deleteCard, showModal, setActiveCard, socket}) => {
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
          <div className='card-text'>
            <p>{card.description}</p>
          </div>
        </div>
        <div className='card-footer'>
          <div
            className='card-footer--bin icon-bin'
            title='Delete'
            onClick={() => {
              deleteCard(card._id).then(deletedCard => {
                socket.emit('cardRemoved', { id: deletedCard.value.data._id } );
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

export default CardItem;
