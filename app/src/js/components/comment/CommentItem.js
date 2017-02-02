import React from 'react';
import Button from '../common/Button';
import { socketConnect } from 'socket.io-react';

const CommentItem = ({card, comment, deleteComment, socket}) => {
    return (
      <li>
        <hr />
        <h6>created at: <small>{new Date(comment.createdAt).toLocaleString('en-NZ')}</small>
          <div
            title='Delete'
            className='comment-bin'>

            { getBinIcon(card, comment, deleteComment, socket) }
          </div>
        </h6>
        <h5 className='format-text'><small>{comment.text}</small></h5>
      </li>
    );
};

export default socketConnect(CommentItem);

const getBinIcon = (card, comment, deleteComment, socket) => {
  if (card.archived) return;

  return (
    <span
      className='icon-bin'
      onClick={() => {
        deleteComment(card._id, comment._id)
          .then((updatedCard) => {
            socket.emit('cardUpdated', { card: updatedCard.value.data } );
          })
      }} />
  )
}
