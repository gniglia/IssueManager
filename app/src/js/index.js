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
import '../assets/stylesheets/all.scss';

import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';
import Layout from './components/layout/Layout';

const middleware = applyMiddleware(immutableState(), promise(), thunk, logger());

const enhancers = compose(
  middleware,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(reducers, enhancers);

import * as cardActions from './actions/cardActions';
store.dispatch(cardActions.loadCards());

const socket = io();

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <SocketProvider socket={socket}>
      <Router history={browserHistory} routes={routes} />
    </SocketProvider>
  </Provider>, app
);
