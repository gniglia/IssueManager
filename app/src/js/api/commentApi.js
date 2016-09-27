import axios from 'axios';

const deleteComment = (issueId, commentId) => {
  return axios.delete(`http://localhost:3500/api/issues/${issueId}/comments/${commentId}`);
};

export default { deleteComment };
