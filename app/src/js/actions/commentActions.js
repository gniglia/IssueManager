import issueApi from '../api/issueApi';
import * as types from './actionTypes';

export const deleteComment = (issueId, commentId) => {
  return {
    type: types.DELETE_COMMENT,
    payload: issueApi.deleteComment(isueId, commentId)
  }
};
