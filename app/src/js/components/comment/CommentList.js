import React from 'react';
import Button from '../common/Button';
import CommentEdit from '../comment/CommentEdit';

const CommentList = ({issue, onDeleteComment, saving, createCommentAction}) => {
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
                onClickHandler={() => onDeleteComment(issue._id, comment._id)}
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
            onCreateComment={createCommentAction}
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
