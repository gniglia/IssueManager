import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import HomePage from './components/home/HomePage';
import IssuesPage from './components/issue/IssuesPage';

export default (
  <Route path='/' component={Layout}>
    <IndexRoute component={HomePage} />
    <Route path='issues' component={IssuesPage} />
  </Route>
);
