import * as types from '../actions/actionTypes';
import initialState from './initialState';

const modal = (state = initialState.modal, action) => {
  switch (action.type) {
    case types.SHOW_MODAL: {
      return {
        modalType: action.payload.modalType,
        modalProps: action.payload.modalProps
      };
    }
    case types.HIDE_MODAL: {
      return initialState.modal;
    }
    default: {
      return state;
    }
  }
};

export default modal;
