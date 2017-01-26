import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/layout/Layout';
import CardsPage from './components/card/CardsPage';

export default (
  <Route path='/' component={Layout}>
    <IndexRoute component={CardsPage} />
  </Route>
);
