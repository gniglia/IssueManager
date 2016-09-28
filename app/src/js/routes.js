import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import HomePage from './components/home/HomePage';
import IssuesPage from './components/issue/IssuesPage';
import IssueView from './components/issue/IssueView';
import IssueEditForm from './components/issue/IssueEditForm';

export default (
  <Route path='/' component={Layout}>
    <IndexRoute component={HomePage} />
    <Route path='issues' component={IssuesPage} />
    <Route path='issues-edit' component={IssueEditForm} />
    <Route path='issues-edit/:id' component={IssueEditForm} />
    <Route path='issues/:id' component={IssueView} />
  </Route>
);
