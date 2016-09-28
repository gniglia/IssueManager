import issueApi from '../api/issueApi';
import * as types from './actionTypes';

export const loadIssues = () => {
  return {
    type: types.FETCH_ISSUES,
    payload: issueApi.loadIssues()
  }
};

export const deleteIssue = (id) => {
  return {
    type: types.DELETE_ISSUE,
    payload: issueApi.deleteIssue(id)
  }
};

export const createIssue = (issue) => {
  return {
    type: types.CREATE_ISSUE,
    payload: issueApi.createIssue(issue)
  };
};

export const updateIssue = (issue) => {
  return {
    type: types.UPDATE_ISSUE,
    payload: issueApi.updateIssue(issue)
  };
};
