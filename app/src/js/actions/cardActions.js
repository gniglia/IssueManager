import cardApi from '../api/cardApi';
import * as types from './actionTypes';

export const loadCards = () => ({
  type: types.FETCH_CARDS,
  payload: cardApi.loadCards()
});

export const deleteCard = (id) => ({
  type: types.DELETE_CARD,
  payload: cardApi.deleteCard(id)
});

export const createCard = (card) => ({
  type: types.CREATE_CARD,
  payload: cardApi.createCard(card)
});

export const updateCard = (card) => ({
  type: types.UPDATE_CARD,
  payload: cardApi.updateCard(card)
});


export const updateCardTitle = (card) => ({
  type: types.UPDATE_CARD,
  payload: cardApi.updateCardTitle(card)
});
