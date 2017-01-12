import * as types from './actionTypes';

export const setActiveCard = (id) => ({
  type: types.SET_ACTIVE_CARD,
  payload: id
});
