import commentApi from '../api/commentApi';
import * as types from './actionTypes';

export const deleteComment = (issueId, commentId) => {
  return {
    type: types.DELETE_COMMENT,
    issueId: issueId,
    payload: commentApi.deleteComment(issueId, commentId)
  }
};
