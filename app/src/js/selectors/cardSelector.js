import { createSelector } from 'reselect';

const getCards = (state) => state.cards.cards;
const getFilter = (state) => state.filter;

export const getFilteredCards = createSelector(
  [ getCards, getFilter ], (cards, filter) => {
    if (!cards)
      return null;

    if (!filter) {
      return cards.filter(card => card.archived === false);
    }

    return cards.filter(card => {
      return card.archived === false && card.title.toLowerCase().indexOf(filter.toLowerCase()) >= 0
    });
  }
);
