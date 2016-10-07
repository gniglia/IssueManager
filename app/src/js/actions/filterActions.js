import * as types from './actionTypes';

export const updateFilter = (filter) => ({
  type: types.UPDATE_FILTER,
  payload: filter
});
