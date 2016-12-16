import { createAction } from 'redux-actions';
import * as types from './actionTypes';

export const showModal = createAction(types.SHOW_MODAL);
export const hideModal = createAction(types.HIDE_MODAL);
