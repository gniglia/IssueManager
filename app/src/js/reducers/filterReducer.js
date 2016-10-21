import * as types from '../actions/actionTypes';
import initialState from './initialState';

const filter = (state = initialState.filter, action) => {
  switch (action.type) {
    case types.UPDATE_FILTER: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default filter;
