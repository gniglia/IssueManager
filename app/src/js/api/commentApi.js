import axios from 'axios';

const deleteComment = (issueId, commentId) => {
  return axios.delete(`http://localhost:3500/api/issues/${issueId}/comments/${commentId}`);
};

const createComment = (comment) => {
  return axios.post(`http://localhost:3500/api/issues/${comment.issueId}/comments/`, {
    text: comment.text
  });
};

export default { deleteComment, createComment };
