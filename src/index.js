import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import rootReducer from './reducers';
import { loadState, saveState } from './res/utils'
import * as serviceWorker from './serviceWorker';

// eslint-disable-next-line no-underscore-dangle
const debug = window.__REDUX_DEVTOOLS_EXTENSION__
// eslint-disable-next-line no-underscore-dangle
  && window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true });

const initialState = loadState() || {};
export const store = createStore(rootReducer, initialState, debug);
store.subscribe(() => {
  saveState(store.getState())
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
