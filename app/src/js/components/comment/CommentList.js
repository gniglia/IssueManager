import React from 'react';
import Button from '../common/Button';

const CommentList = ({issue, onDeleteComment}) => {
  return (
    <div>
      <ul style={ulStyle}>
        {issue.comments.map(comment => {
          return (
            <li key={comment._id}>
              <hr />
              <h6>createdAt: <small>{comment.createdAt}</small></h6>
              <h5><small>{comment.text}</small></h5>

              <Button
                text='remove'
                onClickHandler={() => onDeleteComment(issue._id, comment._id)}
                className='btn btn-danger btn-xs'
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const ulStyle = {
  listStyleType: 'none'
};

export default CommentList;
