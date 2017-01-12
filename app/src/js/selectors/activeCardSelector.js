import { createSelector } from 'reselect';

const getCards = (state) => state.cards.cards;
const getActiveCardId = (state) => state.activeCard;

export const getActiveCard = createSelector(
  [ getCards, getActiveCardId ], (cards, activeCardId) => {
    return cards.find(card => {
      return card._id === activeCardId
    });
  }
);
