import React from 'react';
import Button from '../common/Button';

const CommentItem = ({card, comment, deleteComment}) => {
    return (
      <li>
        <hr />
        <h6>created at: <small>{new Date(comment.createdAt).toLocaleString('en-NZ')}</small>
          <div
            title='Delete'
            className='comment-bin'>
            <span
              className='icon-bin'
              onClick={() => {
                deleteComment(card._id, comment._id)
              }} />
          </div>
        </h6>
        <h5><small>{comment.text}</small></h5>
      </li>
    );
};

export default CommentItem;
