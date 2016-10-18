import React from 'react';
import Button from '../common/Button';
import CommentEditForm from '../comment/CommentEditForm';
import CommentItem from '../comment/CommentItem';
import toastr from 'toastr';

const CommentList = ({issue, commentActions, saving, fetching}) => {
  if (fetching) {
    return (
      <div>Loading</div>
    );
  }

  return (
    <div>
      <ul style={ulStyle}>
        {issue.comments.map(comment => {
          return (
            <CommentItem
              key={comment._id}
              issue={issue}
              comment={comment}
              deleteComment={commentActions.deleteComment}
            />
          )
        })}
        <li>
          <hr />
          <CommentEditForm
            issue={issue}
            saving={saving}
            createComment={commentActions.createComment}
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
