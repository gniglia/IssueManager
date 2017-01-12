import axios from 'axios';

const loadCards = () => {
  return axios.get('http://localhost:3500/api/cards');
};

const deleteCard = (id) => {
  return axios.delete(`http://localhost:3500/api/cards/${id}`);
};

const createCard = (card) => {
  return axios.post('http://localhost:3500/api/cards/', {
    title: card.title,
    description: card.description,
    state: 'open'
  });
};

const updateCard = (card) => {
  return axios.patch(`http://localhost:3500/api/cards/${card.id}`, {
    title: card.title,
    description: card.description
  });
};

const updateCardTitle = (card) => {
  return axios.patch(`http://localhost:3500/api/cards/${card.id}`, {
    title: card.title
  });
};

const updateCardDescription = (card) => {
  return axios.patch(`http://localhost:3500/api/cards/${card.id}`, {
    description: card.description
  });
};

export default { loadCards, deleteCard, createCard, updateCard, updateCardTitle, updateCardDescription };
