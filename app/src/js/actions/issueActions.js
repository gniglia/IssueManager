import issueApi from '../api/issueApi';
import * as types from './actionTypes';

export const loadIssues = () => {
  return {
    type: types.FETCH_ISSUES,
    payload: issueApi.loadIssues()
  }
};
