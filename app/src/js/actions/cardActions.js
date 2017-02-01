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

export const deleteCardSocket = (id) => ({
  type: types.DELETE_CARD_SOCKET,
  payload: id
});

export const archiveCard = (id) => ({
  type: types.ARCHIVE_CARD,
  payload: cardApi.archiveCard(id)
});

export const createCard = (card) => ({
  type: types.CREATE_CARD,
  payload: cardApi.createCard(card)
});

export const createCardSocket = (card) => ({
  type: types.CREATE_CARD_SOCKET,
  payload: card
});

export const updateCard = (card) => ({
  type: types.UPDATE_CARD,
  payload: cardApi.updateCard(card)
});

export const updateCardSocket = (card) => ({
  type: types.UPDATE_CARD_SOCKET,
  payload: card
});

export const updateCardTitle = (card) => ({
  type: types.UPDATE_CARD,
  payload: cardApi.updateCardTitle(card)
});

export const updateCardDescription = (card) => ({
  type: types.UPDATE_CARD,
  payload: cardApi.updateCardDescription(card)
});
