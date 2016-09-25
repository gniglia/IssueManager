import * as types from '../actions/actionTypes';
import initialState from './initialState';

const issues = (state = initialState.issues, action) => {
  switch (action.type) {
    case types.FETCH_ISSUES_PENDING: {
      return {...state, fetching: true}
    }
    case types.FETCH_ISSUES_FULFILLED: {
      return {
        ...state,
        issues: action.payload.data,
        fetching: false,
        fetched: true
      }
    }
    case types.FETCH_ISSUES_REJECTED: {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }

    case types.DELETE_ISSUE_PENDING: {
      return {...state, deleting: true}
    }
    case types.DELETE_ISSUE_FULFILLED: {
      return {
        ...state,
        deleting: false,
        deleted: true,
        issues: state.issues.filter(issue => issue._id !== action.payload.data._id)
      }
    }
    case types.DELETE_ISSUE_REJECTED: {
      return {
        ...state,
        deleting: false,
        error: action.payload
      }
    }
  }
  return state;
};

export default issues;
