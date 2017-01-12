import * as types from '../actions/actionTypes';
import initialState from './initialState';

const activeCard = (state = initialState.activeCard, action) => {
  switch (action.type) {
    case types.SET_ACTIVE_CARD: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default activeCard;
