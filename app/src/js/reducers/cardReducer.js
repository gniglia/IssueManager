import * as types from '../actions/actionTypes';
import initialState from './initialState';

const cards = (state = initialState.cards, action) => {
  switch (action.type) {
    /*
     * Fetching Cards
     */
    case types.FETCH_CARDS_PENDING: {
      return {...state, fetching: true}
    }
    case types.FETCH_CARDS_FULFILLED: {
      return {
        ...state,
        cards: action.payload.data,
        fetching: false
      }
    }
    case types.FETCH_CARDS_REJECTED: {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }

    /*
     * Deleting a Card
     */
    case types.DELETE_CARD_PENDING: {
      return {...state}
    }
    case types.DELETE_CARD_FULFILLED: {
      return {
        ...state,
        cards: state.cards.filter(card => card._id !== action.payload.data._id)
      }
    }
    case types.DELETE_CARD_REJECTED: {
      return {
        ...state,
        error: action.payload
      }
    }

    case types.DELETE_CARD_SOCKET: {
      return {
        ...state,
        cards: state.cards.filter(card => card._id !== action.payload)
      }
    }

    /*
     * Archiving a Card
     */
     case types.ARCHIVE_CARD_PENDING: {
       return {...state, saving: true}
     }
     case types.ARCHIVE_CARD_FULFILLED: {
       return getStateAfterUpdate(state, action);
     }
     case types.ARCHIVE_CARD_REJECTED: {
       return {
         ...state,
         saving: false,
         error: action.payload
       }
     }

    /*
     * Creating a Card
     */
    case types.CREATE_CARD_PENDING: {
      return {...state, saving: true}
    }
    case types.CREATE_CARD_FULFILLED: {
      return {
        ...state,
        saving: false,
        cards: [...state.cards, action.payload.data]
      }
    }
    case types.CREATE_CARD_REJECTED: {
      return {
        ...state,
        saving: false,
        error: action.payload
      }
    }

    case types.CREATE_CARD_SOCKET: {
      return {
        ...state,
        saving: false,
        cards: [...state.cards, action.payload]
      }
    }

    /*
     * Updating a Card
     */
    case types.UPDATE_CARD_PENDING: {
      return {...state, savingField: true}
    }
    case types.UPDATE_CARD_FULFILLED: {
      return getStateAfterUpdate(state, action);
    }
    case types.UPDATE_CARD_REJECTED: {
      return {
        ...state,
        savingField: false,
        error: action.payload
      }
    }

    case types.UPDATE_CARD_SOCKET: {
      const index = state.cards.findIndex(card => card._id === action.payload._id);

      return {
        ...state,
        saving: false,
        savingField: false,
        cards: [
          ...state.cards.slice(0, index),
          action.payload,
          ...state.cards.slice(index + 1)
        ]
      }
    }

    /*
     * Deleting a Comment
     */
    case types.DELETE_COMMENT_PENDING: {
      return {...state}
    }
    case types.DELETE_COMMENT_FULFILLED: {
      return getStateAfterUpdate(state, action);
    }
    case types.DELETE_COMMENT_REJECTED: {
      return {
        ...state,
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
    default: {
      return state;
    }
  }
};

const getStateAfterUpdate = (state, action) => {
  const index = state.cards.findIndex(card => card._id === action.payload.data._id);

  return {
    ...state,
    saving: false,
    savingField: false,
    cards: [
      ...state.cards.slice(0, index),
      action.payload.data,
      ...state.cards.slice(index + 1)
    ]
  }
};

export default cards;
