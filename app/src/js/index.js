import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { createStore, applyMiddleware, compose } from "redux";
import immutableState from 'redux-immutable-state-invariant';

import reducers from "./reducers";

import Layout from "./components/Layout";

const app = document.getElementById('app');

const middleware = applyMiddleware(immutableState());

const enhancers = compose(
  middleware,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(reducers, enhancers);

ReactDOM.render(<Provider store={store}>
  <Layout />
</Provider>, app);
