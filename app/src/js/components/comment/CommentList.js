import React from 'react';
import Button from '../common/Button';
import CommentEditForm from '../comment/CommentEditForm';
import CommentItem from '../comment/CommentItem';
import './Comment.scss';

const CommentList = ({card, commentActions, saving, fetching}) => {
  if (fetching) {
    return (
      <div>Loading</div>
    )
  }

  return (
    <div>
      <ul style={ulStyle}>
        { getComments(card, commentActions.deleteComment) }
        { getCommentForm(card, saving, commentActions.createComment) }
      </ul>
    </div>
  )
}

export default CommentList;

const ulStyle = {
  listStyleType: 'none',
  padding: 0,
  margin: 0
}

const getComments = (card, deleteComment) => {
  if (card.comments.length === 0) {
    return (
      <div>
        <hr />
        <div>No comments yet.</div>
      </div>
    )
  }

  return (
    card.comments.map(comment => {
      return (
        <CommentItem
          key={comment._id}
          card={card}
          comment={comment}
          deleteComment={deleteComment}
        />
      )
    })
  )
}

const getCommentForm = (card, saving, createComment) => {
  if (card.archived) return;

  return (
    <li>
      <hr />
      <CommentEditForm
        card={card}
        saving={saving}
        createComment={createComment}
      />
    </li>
  )
}
