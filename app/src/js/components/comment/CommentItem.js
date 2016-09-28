import React from 'react';
import Button from '../common/Button';
import toastr from 'toastr';

const CommentItem = ({issue, comment, deleteCommentAction}) => {
    return (
      <li>
        <hr />
        <h6>createdAt: <small>{new Date(comment.createdAt).toLocaleString('en-NZ')}</small></h6>
        <h5><small>{comment.text}</small></h5>

        <Button
          text='remove'
          onClickHandler={() => {
            deleteCommentAction(issue._id, comment._id)
              .then(() => toastr.success('Comment removed successfully'))
          }}
          className='btn btn-danger btn-xs'
        />
      </li>
    );
};

export default CommentItem;
