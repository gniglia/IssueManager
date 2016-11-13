import React from 'react';
import Button from '../common/Button';

const CommentItem = ({card, comment, deleteComment}) => {
    return (
      <li>
        <hr />
        <h6>createdAt: <small>{new Date(comment.createdAt).toLocaleString('en-NZ')}</small></h6>
        <h5><small>{comment.text}</small></h5>

        <Button
          text='remove'
          onClickHandler={() => {
            deleteComment(card._id, comment._id)
          }}
          className='btn btn-danger btn-xs'
        />
      </li>
    );
};

export default CommentItem;
