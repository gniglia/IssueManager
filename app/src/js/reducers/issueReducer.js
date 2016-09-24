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
        fetching: false,
        fetched: true,
        users: action.payload
      }
    }
    case types.FETCH_ISSUES_REJECTED: {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
  }
  return state;
};

export default issues;
