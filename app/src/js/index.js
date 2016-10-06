import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from 'react-router';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createStore, applyMiddleware, compose } from "redux";
import immutableState from 'redux-immutable-state-invariant';
import routes from './routes';
import reducers from "./reducers";
import Layout from "./components/Layout";
import '../styles/styles.css';

const middleware = applyMiddleware(immutableState(), promise(), thunk, logger());

const enhancers = compose(
  middleware,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(reducers, enhancers);

import * as issueActions from './actions/issueActions';
store.dispatch(issueActions.loadIssues());

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, app
);
