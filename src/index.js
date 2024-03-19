import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { thunk } from 'redux-thunk';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./containers/App.js";
import { searchRobots, requestRobots } from './reducers.js'
import 'tachyons';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

reportWebVitals();
