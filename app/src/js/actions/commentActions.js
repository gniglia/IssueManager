import commentApi from '../api/commentApi';
import * as types from './actionTypes';

export const deleteComment = (issueId, commentId) => ({
  type: types.DELETE_COMMENT,
  payload: commentApi.deleteComment(issueId, commentId)
});

export const createComment = (comment) => ({
  type: types.CREATE_COMMENT,
  payload: commentApi.createComment(comment)
});
