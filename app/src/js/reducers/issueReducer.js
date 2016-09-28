import * as types from '../actions/actionTypes';
import initialState from './initialState';

const issues = (state = initialState.issues, action) => {
  switch (action.type) {
    /*
     * Fetching Issues
     */
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

    /*
     * Deleting an Issue
     */
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

    /*
     * Creating an Issue
     */
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

    /*
     * Updating an Issue
     */
    case types.UPDATE_ISSUE_PENDING: {
      return {...state, saving: true}
    }
    case types.UPDATE_ISSUE_FULFILLED: {
      return getStateAfterUpdate(state, action);
    }
    case types.UPDATE_ISSUE_REJECTED: {
      return {
        ...state,
        saving: false,
        error: action.payload
      }
    }

    /*
     * Deleting a Comment
     */
    case types.DELETE_COMMENT_PENDING: {
      return {...state, deleting: true}
    }
    case types.DELETE_COMMENT_FULFILLED: {
      return getStateAfterUpdate(state, action);
    }
    case types.DELETE_COMMENT_REJECTED: {
      return {
        ...state,
        deleting: false,
        error: action.payload
      }
    }

    /*
     * Creating a Comment
     */
    case types.CREATE_COMMENT_PENDING: {
      return {...state, saving: true}
    }
    case types.CREATE_COMMENT_FULFILLED: {
      return getStateAfterUpdate(state, action);
    }
    case types.CREATE_COMMENT_REJECTED: {
      return {
        ...state,
        saving: false,
        error: action.payload
      }
    }
  }
  return state;
};

const getStateAfterUpdate = (state, action) => {
  const index = state.issues.findIndex(issue => issue._id === action.payload.data._id);

  return {
    ...state,
    saving: false,
    saved: true,
    issues: [
      ...state.issues.slice(0, index),
      action.payload.data,
      ...state.issues.slice(index + 1)
    ]
  }
};

export default issues;
