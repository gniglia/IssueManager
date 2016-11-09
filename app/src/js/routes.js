import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import HomePage from './components/home/HomePage';
import CardsPage from './components/card/CardsPage';
import CardView from './components/card/CardView';
import CardEditForm from './components/card/CardEditForm';

export default (
  <Route path='/' component={Layout}>
    <IndexRoute component={HomePage} />
    <Route path='cards' component={CardsPage} />
    <Route path='cards-edit' component={CardEditForm} />
    <Route path='cards-edit/:id' component={CardEditForm} />
    <Route path='cards/:id' component={CardView} />
  </Route>
);
