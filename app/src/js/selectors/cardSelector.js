import { createSelector } from 'reselect';

const getCards = (state) => state.cards.cards;
const getFilter = (state) => state.filter;

export const getFilteredCards = createSelector(
  [ getCards, getFilter ], (cards, filter) => {
    if (!filter) {
      return cards;
    }

    return cards.filter(card => {
      return card.title.toLowerCase().indexOf(filter.toLowerCase()) >= 0
    });
  }
);
