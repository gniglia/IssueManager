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

    case types.CREATE_ISSUE_PENDING: {
      return {...state, saving: true}
    }
    case types.CREATE_ISSUE_FULFILLED: {
      return {
        ...state,
        saving: false,
        saved: true,
        issues: [...state.issues, action.payload.data]
      }
    }
    case types.CREATE_ISSUE_REJECTED: {
      return {
        ...state,
        saving: false,
        error: action.payload
      }
    }

    case types.DELETE_COMMENT_PENDING: {
      return {...state, deleting: true}
    }
    case types.DELETE_COMMENT_FULFILLED: {

      const currentIssues = [...state.issues];
      let issueToUpdate = currentIssues.findIndex(issue => issue.id === issueId);
      const updatedIssue = issueToUpdate.comments.splice(start, deleteCount);
      currentTweets[issueToUpdate] = action.payload;

      return {
          ...state,
          issues: currentTweets
      }

      return {
        ...state,
        deleting: false,
        deleted: true,
        issues: state.issues.filter(issue => issue._id !== action.payload.data._id)
      }
    }
    case types.DELETE_COMMENT_REJECTED: {
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
