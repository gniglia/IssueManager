import React from 'react';
import Button from '../common/Button';
import CommentEdit from '../comment/CommentEdit';
import toastr from 'toastr';

const CommentList = ({issue, commentActions, saving}) => {
  return (
    <div>
      <ul style={ulStyle}>
        {issue.comments.map(comment => {
          return (
            <li key={comment._id}>
              <hr />
              <h6>createdAt: <small>{new Date(comment.createdAt).toLocaleString('en-NZ')}</small></h6>
              <h5><small>{comment.text}</small></h5>

              <Button
                text='remove'
                onClickHandler={() => {
                  commentActions.deleteComment(issue._id, comment._id)
                    .then(() => toastr.success('Comment removed successfully'))
                }}
                className='btn btn-danger btn-xs'
              />
            </li>
          );
        })}
        <li>
          <hr />
          <CommentEdit
            issue={issue}
            saving={saving}
            createCommentAction={commentActions.createComment}
          />
        </li>
      </ul>
    </div>
  );
};

const ulStyle = {
  listStyleType: 'none'
};

export default CommentList;
