import axios from 'axios';

const deleteComment = (cardId, commentId) => {
  return axios.delete(`http://localhost:3500/api/cards/${cardId}/comments/${commentId}`);
};

const createComment = (comment) => {
  return axios.post(`http://localhost:3500/api/cards/${comment.cardId}/comments/`, {
    text: comment.text
  });
};

export default { deleteComment, createComment };
