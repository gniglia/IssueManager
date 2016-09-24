import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import { createStore, applyMiddleware, compose } from "redux";
import immutableState from 'redux-immutable-state-invariant';

import reducers from "./reducers";

import Layout from "./components/Layout";

const app = document.getElementById('app');

const middleware = applyMiddleware(promise(), thunk, logger(), immutableState());

const enhancers = compose(
  middleware,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(reducers, enhancers);

import * as issueActions from './actions/issueActions';
store.dispatch(issueActions.loadIssues());

ReactDOM.render(<Provider store={store}>
  <Layout />
</Provider>, app);
