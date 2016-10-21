import issueApi from '../api/issueApi';
import * as types from './actionTypes';

export const loadIssues = () => ({
  type: types.FETCH_ISSUES,
  payload: issueApi.loadIssues()
});

export const deleteIssue = (id) => ({
  type: types.DELETE_ISSUE,
  payload: issueApi.deleteIssue(id)
});

export const createIssue = (issue) => ({
  type: types.CREATE_ISSUE,
  payload: issueApi.createIssue(issue)
});

export const updateIssue = (issue) => ({
  type: types.UPDATE_ISSUE,
  payload: issueApi.updateIssue(issue)
});
