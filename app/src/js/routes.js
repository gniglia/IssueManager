import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/layout/Layout';
import CardsPage from './components/card/CardsPage';
import CardEditForm from './components/card/CardEditForm';

export default (
  <Route path='/' component={Layout}>
    <IndexRoute component={CardsPage} />
  </Route>
);
